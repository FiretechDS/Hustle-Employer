<template>
  <div>
    <HorizontalCard
      :title="title"
      :salary="salary"
      :status="status"
      :duration="duration"
      :deadline="deadline"
      :onClick="showModal"
    >
      <template v-slot:buttons v-if="areOffersActive">
        <img
          class="cardIcons"
          @click.stop
          :src="require('@/assets/svg/postulantes.svg')"
        />
        <img class="cardIcons"  @click.stop :src="require('@/assets/svg/edit.svg')" />
        <img class="cardIcons"  @click.stop :src="require('@/assets/svg/archive.svg')" />
        <img
          class="cardIcons"
          @click.stop
          @click="showModal"
          :src="require('@/assets/svg/more.svg')"
        />
      </template>
    </HorizontalCard>
    <Modal v-show="state.isModalVisible" @close="closeModal()">
      <template v-slot:header> {{ title }}</template>
      <template v-slot:body>
        <p class="fields-modal-offer value-modal-offer">{{ description }}</p>

        <div class="fields-modal-offer">
          <ul class="columns-modal-offer-detail">
            <li>
              <p class="title-modal-offer">Hourly rate</p>
            </li>
            <li class="small-columns-modal-offer-detail">
              <p class="title-modal-offer">Hours</p>
            </li>
            <li class="small-columns-modal-offer-detail">
              <p class="title-modal-offer">Deadline</p>
            </li>
          </ul>
          <ul class="columns-modal-offer-detail">
            <li>
              <p class="value-modal-offer">{{ salary }}</p>
            </li>
            <li class="small-columns-modal-offer-detail">
              <p class="value-modal-offer">{{ duration }}</p>
            </li>
            <li class="small-columns-modal-offer-detail">
              <p class="value-modal-offer">{{ deadline }}</p>
            </li>
          </ul>
        </div>

        <div class="fields-modal-offer">
          <p class="title-modal-offer">Schedule</p>
          <ul class="list-modal-offer">
            <li v-for="day in schedule.days" :key="schedule.days.indexOf(day)">
              <div class="value-modal-offer">
                <p>
                  {{ day }} {{ schedule.hourIn }}:00 -{{ schedule.hourOut }}:00
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="fields-modal-offer">
          <p class="title-modal-offer">Skills</p>
          <ul class="list-modal-offer">
            <li v-for="skill in skills" :key="skill.name">
              <div class="value-modal-offer">
                <p>
                  {{ skill.name }}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="fields-modal-offer">
          <p class="title-modal-offer">Location</p>
          <p class="value-modal-offer">{{ location }}</p>
        </div>
      </template>
      <template v-slot:footer>
        <div class="offer-detail-footer">
          <ul v-if="areOffersActive" class="footer-offer-detail">
            <li>
              <Button
                buttonText="Applicants"
                iconName="postulantes.svg"
                :styles="{ width: '15rem' }"
                :isPrimary="false"
                @click="openAplications()"
              />
            </li>
            <li>
              <Button
                buttonText="Update"
                iconName="edit.svg"
                :isPrimary="false"
                @click="update()"
              />
            </li>
            <li>
              <Button
                buttonText="Archive"
                iconName="archive.svg"
                :isPrimary="false"
                @click="file()"
              />
            </li>
          </ul>
          <ul v-else class="offer-detail-footer">
            <li>
              <Button
                buttonText="Applicants"
                iconName="postulantes.svg"
                :styles="{ width: '15rem' }"
                :isPrimary="false"
                @click="openAplications()"
              />
            </li>
            <li>
              <Button
                buttonText="Update"
                iconName="edit.svg"
                :isPrimary="false"
                @click="update()"
              />
            </li>
            <li>
              <Button
                buttonText="Archive"
                iconName="archive.svg"
                :isPrimary="false"
                @click="file()"
              />
            </li>
          </ul>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from "vue";
import HorizontalCard from "@/components/HorizontalCard.vue";
import Modal from "../Modal.vue";
import Button from "../Button.vue";

export default defineComponent({
  name: "OfferDetail",
  props: {
    title: {
      type: String,
    },
    salary: {
      type: Number,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number,
    },
    deadline: {
      type: String,
    },
    schedule: {
      type: Object as PropType<{
        id: number;
        days: string[];
        hourIn: string;
        hourOut: string;
      }>,
    },
    skills: {
      type: Array as PropType<{ name: string; category: string }[]>,
    },
    status: {
      type: String,
    },
    job: {
      type: Object,
    },
    location: {
      type: String,
    },
    areOffersActive: {
      type: Boolean,
      default: true,
    },
  },
  components: { Modal, HorizontalCard, Button },
  created() {
    console.log(this.state);
  },
  setup() {
    const state = reactive({
      isModalVisible: false as boolean,
    });
    function showModal(): void {
      state.isModalVisible = true;
    }
    function closeModal(): void {
      state.isModalVisible = false;
    }
    return {
      state,
      showModal,
      closeModal,
    };
  },
});
</script>

<style lang="scss" scoped>
.cardIcons {
  width: 3rem;
  height: 3rem;
  filter: $filter-blue;
  flex: 1;
}
</style>