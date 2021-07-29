<template>
  <div>
    <PlusButton :onClick="showModal" />
    <Modal v-show="state.isModalVisible" @close="closeModal()">
      <template v-slot:header> Post new offer </template>
      <template v-slot:body>
        <div class="create-job-offer-body-div">
          <form class="create-job-offer-form">
            <p class="subtitle">Job:</p>
            <input
              v-model="jobOffer.title"
              placeholder="Title"
              id="title-input"
            />
            <input
              v-model="jobOffer.location"
              placeholder="Location"
              id="location-input"
            />
            <input
              type="number"
              v-model="stringHelper.hourlyRate"
              placeholder="HourlyRate ($)"
              id="hourlyRate-input"
            />
            <p class="subtitle">Schedule:</p>
            <div class="schedule-options">
              <Multiselect
                :options="jobOffer.schedules.options"
                v-bind="jobOffer.schedules"
                v-model="jobOffer.schedules.value"
                placeholder="Days"
                mode="multiple"
                class="schedule-multiselect"
              >
                <template v-slot:multiplelabel="{ values }">
                  <div class="multiselect-multiple-label">
                    {{ values.length }} days selected
                  </div>
                </template>
              </Multiselect>
              <Multiselect
                :options="getHourOptions()"
                v-model="jobOffer.startHour"
                placeholder="Start hour"
                class="hour-multiselect"
                id="start-hour-input"
              />
              <Multiselect
                :options="getHourOptions()"
                v-model="jobOffer.endHour"
                placeholder="End hour"
                class="hour-multiselect"
                id="end-hour-input"
              />
            </div>
            <p class="subtitle">Deadline:</p>
            <input
              type="date"
              v-model="jobOffer.deadline"
              placeholder="Deadline"
              id="deadline-input"
            />
            <input
              type="number"
              v-model="stringHelper.duration"
              placeholder="Duration (hours)"
              id="duration-input"
            />
            <Multiselect
              :options="jobOffer.skills.options"
              v-bind="jobOffer.skills"
              v-model="jobOffer.skills.value"
              placeholder="Skills"
              mode="multiple"
              class="skills-multiselect"
              id="skills-input"
            >
              <template v-slot:multiplelabel="{ values }">
                <div class="multiselect-multiple-label">
                  {{ values.length }} skills selected
                </div>
              </template>
            </Multiselect>
            <p class="subtitle">Special Requirements:</p>
            <textarea
              class="description-input"
              v-model="jobOffer.specialRequirements"
              placeholder="Description"
              id="description-input"
            />
            <p class="form-result">{{ message.value }}</p>
          </form>
          <Loader class="loader" :loading="message.loading" color="#2940d3" />
        </div>
      </template>
      <template v-slot:footer>
        <div class="create-job-offer-footer">
          <Button
            buttonText="Publish"
            iconName="paper-plane.svg"
            :isPrimary="true"
            @click="sendOffer(true)"
            id="create-button"
          />
          <Button
            buttonText="Archive"
            iconName="archive.svg"
            :isPrimary="false"
            @click="sendOffer(false)"
          />
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, watch } from "vue";
import PlusButton from "../PlusButton.vue";
import Modal from "../Modal.vue";
import Button from "../Button.vue";
import Multiselect from "@vueform/multiselect";
import Loader from "@/components/Loader.vue";

import { usePlocState } from "../../common/UsePlocState";
import { SkillPloc } from "../../../../core/src";
export default defineComponent({
  name: "CreateOfferModal",
  components: { Modal, PlusButton, Button, Multiselect, Loader },
  props: {
    message: {
      type: Object,
      default: {
        value: "",
        loading: false,
      },
    },
  },
  setup(props, ctx) {
    const state = reactive({
      isModalVisible: false as boolean,
    });
    const skillPloc = inject<SkillPloc>("skillsPloc") as SkillPloc;
    const skillState = usePlocState(skillPloc);

    watch(skillState, (value, oldState) => {
      console.log(value);
      if (value.kind === "LoadedSkillsState") {
        jobOffer.skills.options = value.skills.map((skill) => {
          return { value: skill.number, label: skill.name };
        });
      }
    });
    const jobOffer = reactive({
      title: "" as string,
      specialRequirements: "" as string,
      location: "" as string,
      deadline: "" as string,
      duration: 0 as number,
      hourlyRate: 0 as number,
      schedules: {
        value: [] as Array<string>,
        options: [
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
        ],
      },
      startHour: 0 as number,
      endHour: 0 as number,
      skills: {
        value: [] as Array<number>,
        options: [{ value: 1, label: "Skill Loading Error" }],
      },
      status: 1,
    });
    const stringHelper = reactive({
      duration: "" as string,
      hourlyRate: "" as string,
    });

    function showModal(): void {
      state.isModalVisible = true;
    }
    function closeModal(): void {
      state.isModalVisible = false;
      setValuesToDefault();
      ctx.emit("resetMsg");
    }

    function getHourOptions(): Object[] {
      let i = 5;
      const options = [];
      while (i <= 23) {
        options.push({ value: i, label: `${i}:00` });
        i++;
      }
      return options;
    }

    function setValuesToDefault(): void {
      jobOffer.title = "";
      jobOffer.specialRequirements = "";
      jobOffer.status = 1;
      jobOffer.location = "";
      jobOffer.deadline = "";
      jobOffer.duration = 0;
      jobOffer.hourlyRate = 0;
      jobOffer.schedules.value = [];
      jobOffer.startHour = 0;
      jobOffer.endHour = 0;
      jobOffer.skills.value = [];

      stringHelper.duration = "";
      stringHelper.hourlyRate = "";
    }

    async function sendOffer(willPublish: boolean) {
      jobOffer.hourlyRate = Number(stringHelper.hourlyRate);
      jobOffer.duration = Number(stringHelper.duration);
      const status = willPublish ? "Open" : "Posted";
      console.log(jobOffer);
      const newOffer = {
        ...jobOffer,
        employerId: 1,
        status: status,
        schedules: jobOffer.schedules.value,
        skills: jobOffer.skills.value.map((skill: number) => {
          return {
            name: jobOffer.skills.options[skill - 1].label,
            number: skill,
            category: 1,
          };
        }),
      };
      ctx.emit("createOffer", newOffer);
    }

    return {
      state,
      jobOffer,
      stringHelper,
      showModal,
      closeModal,
      sendOffer,
      getHourOptions,
    };
  },
});
</script>

<style lang="scss" scoped>
div {
  color: grey;
  padding: 10px;
  text-align: top left;
  display: inline;
}
.create-job-offer-form {
  margin: 0rem 1rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  .subtitle {
    width: 100%;
  }
}

input {
  font-family: "Poppins";
  margin: 10px;
  display: inline-block;
  border-radius: 10px;
  border-color: transparent;
  padding: 5px;
  width: 25%;
  color: $font-gray;
  background: $lighter-gray;
}

textarea {
  resize: none;
  font-family: "Poppins";
  margin: 10px;
  display: inline-block;
  border-radius: 10px;
  border-color: rgb(196, 196, 196);
  padding: 5px;
  width: 90%;
  background: $lighter-gray;
  border-width: 2px;
  border-style: inset;
}

.description-input {
  width: 100%;
  height: 6rem;
  border: none;
  border-radius: 10px;
}
.schedule-options {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .hour-multiselect {
    width: 12rem;
  }
  .schedule-multiselect {
    margin-right: 0;
    width: 12rem;
  }
}

.schedule-input {
  padding: 0;
  margin: 30px;
  margin-left: 0px;
}

.form-result {
  text-align: center;
  color: $highlit-darkblue;
}
label {
  border-radius: 10px;
  border-color: rgb(196, 196, 196);
  border-style: inset;
  border-width: 2px;
  background: rgba(197, 197, 197, 0.349);
  padding: 3px;
  padding-right: 9px;
  padding-left: 0px;
  margin: 3px;
}
.skills-multiselect {
  width: 30%;
  margin: 0rem 1rem;
}
input[type="time"]::-webkit-calendar-picker-indicator {
  background: none;
}
.loader {
  margin-left: 10rem;
}
.create-job-offer-footer {
  display: flex;
  width: 26rem;
  margin-left: auto;
  justify-content: space-between;
}
</style>
