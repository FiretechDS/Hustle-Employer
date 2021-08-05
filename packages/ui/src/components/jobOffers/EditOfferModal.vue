<template>
    <Modal v-if="state.isEditableModalVisible === true" @close="closeEditableModal()">
       <template v-slot:header>
          <span class="title">Edit offer</span>
      </template>
      <template v-slot:body>
        <p class="fields-modal-offer value-modal-offer">
          <input
                v-model="offer.specialRequirements"
                class="description-input"
                placeholder="Special requirements"
                id="edit-offer-hourly-rate"
                type="text"
              />
        </p>
        <div class="fields-modal-offer">
          <ul class="columns-modal-offer-detail">
            <li>
              <p class="title-modal-offer">Title</p>
            </li>
            <li class="small-columns-modal-offer-detail">
              <p class="title-modal-offer">Address</p>
            </li>
          </ul>
          <ul class="columns-modal-offer-detail">
            <li>
              <input
                v-model="offer.jobTitle"
                class="tiny-field-gray"
                placeholder="Job title"
                id="edit-offer-hourly-rate"
                type="text"
              />
            </li>
            <li class="small-columns-modal-offer-detail">
              <input
                v-model="offer.address"
                class="tiny-field-gray"
                placeholder="Address"
                id="edit-offer-hourly-rate"
                type="text"
              />
            </li>
          </ul>
        </div>
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
              <input
                v-model="offer.hourlyRate"
                class="tiny-field-gray"
                placeholder="Hourly rate"
                id="edit-offer-hourly-rate"
                type="text"
              />
            </li>
            <li class="small-columns-modal-offer-detail">
              <input
                v-model="offer.duration"
                class="tiny-field-gray"
                placeholder="Duration"
                id="edit-offer-hourly-rate"
                type="text"
              />
            </li>
            <li class="small-columns-modal-offer-detail">
              <input
                class="tiny-field-gray"
                type="date"
                v-model="offer.deadline"
                placeholder="Deadline"
                id="deadline-input"
              />
            </li>
          </ul>
        </div>
        <div class="fields-modal-offer">
          <ul class="columns-modal-offer-detail">
            <li>
              <p class="title-modal-offer">Days</p>
            </li>
            <li class="small-columns-modal-offer-detail">
              <p class="title-modal-offer">Start hour</p>
            </li>
            <li class="small-columns-modal-offer-detail">
              <p class="title-modal-offer">End hour</p>
            </li>
          </ul>
          <ul class="columns-modal-offer-detail">
            
            <li class="small-columns-modal-offer-detail">
              <Multiselect
              :options="getHourOptions()"
              v-model="offer.startHour"
              placeholder="Start hour"
              class="tiny-field-gray"
              id="start-hour-input"
            />
            </li>
            <li class="small-columns-modal-offer-detail">
              <Multiselect
              :options="getHourOptions()"
              v-model="offer.endHour"
              placeholder="End hour"
              class="tiny-field-gray"
              id="end-hour-input"
            />
            </li>
          </ul>
        </div>
      </template>
    </Modal>
</template>

<script lang="ts">
import Modal from "../Modal.vue";
import Button from "../Button.vue";
import { createToast } from "mosha-vue-toastify";
import Multiselect from "@vueform/multiselect";
export default defineComponent({
  name: "EditOffer",
  props: {
    offer: {
      type: Object as () => jobPresentationProps,
      required: true,
    },
  },
  components: {
      Modal, Button, Multiselect
  },
  setup(props){
     function showEditableModal(): void {
      state.isEditableModalVisible = true;
      closeModal();
      //console.log(ploc);
    }
    function closeEditableModal(): void {
      state.isEditableModalVisible = false;
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
    return{
        showEditableModal,
        closeEditableModal,
        getHourOptions
    }
  }
})
</script>

<style lang="scss" scoped>
.tiny-field-gray{
  text-indent: 0.7rem;
  border-radius: 8px;
  height: 2.5rem;
  margin-top: 1rem;
  margin-left: -1rem;
  font-size: $normal-font;
  font-family: "Poppins";
  display: inline-block;
  border-color: transparent;
  color: $font-gray;
  background: $lighter-gray;
  width: 85%;
}
.description-input {
  text-indent: 0.7rem;
  width: 95%;
  height: 6rem;
  border: none;
  border-radius: 10px;
  color: $font-gray;
  background: $lighter-gray;
  font-size: $normal-font;
  font-family: "Poppins";
  margin-left: -1rem;
}
</style>