<template>
  <Modal v-show="isModalVisible" @close="closeEditableModal()">
    <template v-slot:header>
      <div class="header">
        <span class="title">Edit offer</span>
        <div v-if="message.loading" :loading="message.loading" class="loader">
          <Loader color="#39a9cb" />
        </div>
      </div>
    </template>
    <template v-slot:body>
      <form class="create-job-offer-form">
        <p class="subtitle">Job:</p>
        <input v-model="jobOffer.title" placeholder="Title" id="title-input" />
        <input
          v-model="jobOffer.location"
          placeholder="Address"
          id="location-input"
        />
        <input
          type="number"
          v-model="jobOffer.hourlyRate"
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
          v-model="jobOffer.duration"
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
        <p class="subtitle">Location:</p>
        <MapComponent
          :clickable="true"
          :position="{ lat: jobOffer.latitude, lng: jobOffer.longitude }"
          @locationUpdated="updateLocation"
          :styling="{
            height: '20rem',
            width: '100%',
            'border-radius': '5px',
          }"
        />
        <p class="form-result">{{ message.value }}</p>
      </form>
    </template>
    <template v-slot:footer>
      <div class="edit-job-offer-footer">
        <Button
          buttonText="Save"
          :isPrimary="true"
          :styles="{ width: '18rem' }"
          @click="sendOffer"
        />
      </div>
    </template>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, inject, PropType, reactive } from "vue";
import Modal from "../Modal.vue";
import Button from "../Button.vue";
import { createToast } from "mosha-vue-toastify";
import Multiselect from "@vueform/multiselect";
import {
  jobPresentationProps,
  jobCreatePresentationProps,
  JobOfferPloc,
} from "../../../../core/src/jobOffer/presentation";
import { skills } from "./skills";
import Loader from "../Loader.vue";
import MapComponent from "../map/MapComponent.vue";
export default defineComponent({
  name: "EditOffer",
  props: {
    offer: {
      type: Object as () => jobPresentationProps,
      required: true,
    },
    closeEditableModal: {
      type: Function as PropType<() => void>,
      required: true,
    },
    isModalVisible: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
  components: {
    Modal,
    Button,
    Multiselect,
    Loader,
    MapComponent,
  },
  setup(props, ctx) {
    const ploc = inject<JobOfferPloc>("jobOfferPloc") as JobOfferPloc;
    const message = reactive({
      value: "",
      loading: false,
    });
    function updateLocation(location: { lat: number; lng: number }) {
      jobOffer.latitude = location.lat;
      jobOffer.longitude = location.lng;
      console.log(location);
    }
    function setOffer() {
      return {
        title: props.offer.title as string,
        specialRequirements: props.offer.specialRequirements as string,
        location: props.offer.location as string,
        deadline: props.offer.deadline as string,
        duration: props.offer.duration as number,
        hourlyRate: props.offer.hourlyRate as number,
        schedules: {
          value: props.offer.schedules as Array<string>,
          options: [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
          ],
        },
        startHour: props.offer.startHour as number,
        endHour: props.offer.endHour as number,
        skills: {
          value: props.offer.skills.map((skill) => {
            return skill.number;
          }) as Array<number>,
          options: skills.map((skill) => {
            return { label: skill.habilityName, value: skill.id };
          }),
        },
        status: props.offer.status === "Open" ? 1 : 0,
        latitude: props.offer.latitude,
        longitude: props.offer.longitude,
      };
    }
    const jobOffer = reactive(setOffer());

    async function sendOffer() {
      message.loading = true;
      const editedOffer: jobPresentationProps = {
        ...jobOffer,
        id: props.offer.id,
        creationDate: props.offer.creationDate,
        employerId: props.offer.employerId,
        status: props.offer.status,
        schedules: jobOffer.schedules.value,
        skills: jobOffer.skills.value.map((skill: number) => {
          return {
            name: jobOffer.skills.options[skill - 1].label,
            number: skill,
            category: 1,
          };
        }),
      };
      const result = await ploc.updateOffer(editedOffer.id, editedOffer);
      message.loading = false;
      if (result.success) {
        createToast("Offer Updated", {
          type: "success",
          toastBackgroundColor: "#39a9cb",
          position: "bottom-center",
          showIcon: true,
        });
      }
      message.value = result.success ? "" : result.value;
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
    return {
      getHourOptions,
      jobOffer,
      updateLocation,
      sendOffer,
      message,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

div {
  color: grey;
  padding: 10px;
  text-align: top left;
  display: inline;
}
.create-job-offer-form {
  margin: 0rem 1rem;
  width: 80%;
  height: 75rem;
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
.edit-job-offer-footer {
  //margin-right: 6.6rem;
  display: flex;
  justify-content: center;
}
</style>