<template>
  <JobCard
    :showInfo="showModal"
    :jobTitle="jobTitle"
    :firstName="firstName"
    :lastName="lastName"
    :startDate="startDate"
    :endDate="endDate"
    :jobStatus="jobStatus"
    :jobStatusName="jobStatusName"
    :review="review"
    :rating="rating"
    :cancelJob="cancelJob"
    :finishJob="finishJob"
  />
  <Modal :hideX="false" v-show="state.isModalVisible" @close="closeModal()">
    <template v-slot:header>
      <div class="candidate-modal-header">
      </div>
    </template>
    <template v-slot:body>
      <div class="title-modal-row">
        <h3 class="title-modal">{{jobTitle}}</h3>
        <img
            class="icon-button"
            :src="require('@/assets/svg/location.svg')"
            @click="openLocation()"
          />
      </div>
      <div class="fields-modal-row">
        <div class="fields-modal-column">
          <p class="info-value description">{{ description }}</p>
        </div>
      </div>
      <div class="fields-modal-row">
        <div class="fields-modal-column">
          <p class="info-title">Duration</p>
          <p class="info-value">{{ jobDuration }} hours</p>
        </div>
        <div class="fields-modal-column">
          <p class="info-title">Start Date</p>
          <p class="info-value">{{ startDate }}</p>
        </div>
        <div class="fields-modal-column">
          <p class="info-title">Status</p>
          <p class="info-value">{{ jobStatusName }}</p>
        </div>
      </div>
      <div class="title-modal-row">
        <p class="title-modal">Employee</p>
        <img
            class="icon-button"
            :src="require('@/assets/svg/download.svg')"
            @click="downloadInfo()"
          />
      </div>
      <div class="fields-modal-row">
        <div class="fields-modal-column">
          <p class="info-title">Name</p>
          <p class="info-value">{{firstName}} {{lastName}}</p>
        </div>
        <div class="fields-modal-column">
          <p class="info-title">Birth Date</p>
          <p class="info-value">{{ birthDate }}</p>
        </div>
        <div class="fields-modal-column">
          <p class="info-title">Contact</p>
          <p class="info-value">{{ phoneNumber }}</p>
        </div>
      </div>
      <div class="fields-modal-row">
        <div class="fields-modal-column">
          <p class="info-title">Education Level</p>
          <p class="info-value">{{ educationLevel }}</p>
        </div>
        <div class="fields-modal-column">
          <p class="info-title">City</p>
          <p class="info-value">{{ cityAddress }}</p>
        </div>
        <div class="fields-modal-column">
          <p class="info-title">State</p>
          <p class="info-value">{{ stateAddress }}</p>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="offer-detail-footer">
        <ul class="footer-offer-detail">
          <li  v-if="jobStatus==='3'||jobStatus==='4'">
            <Button
              buttonText="Finish job"
              iconName="right-arrow.svg"
              :isPrimary="true"
              @click="finishJob()"
            />
          </li>
          <li>
            <Button
              buttonText="Message"
              iconName="message.svg"
              :isPrimary="false"
              @click="messageEmployee()"
            />
          </li>
          <li v-if="jobStatus==='3'||jobStatus==='4'">
            <Button
              buttonText="Cancel job"
              iconName="cancel.svg"
              :isPrimary="false"
              @click="cancelJob()"
            />
          </li>
          <li v-if="(jobStatus==='5'||jobStatus==='6')&&review===''">
            <Button
              buttonText="Review"
              iconName="review.svg"
              :isPrimary="false"
              @click="openReviewModal()"
            />
          </li>
        </ul>
      </div>
    </template>
  </Modal>
  <ReviewModal 
    v-if="(jobStatus==='5'||jobStatus==='6')&&review===''"
    v-show="state.isReviewModalVisible"
    @close="closeReviewModal()"
    @publish="reviewEmployee"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from "vue";
import JobCard from "./JobCard.vue";
import Modal from "../Modal.vue";
import ReviewModal from "./ReviewModal.vue";
import Button from "../Button.vue";
export default defineComponent({
  name: "OfferDetail",
  props: {
    jobTitle: {
        type: String,
    },
    description: {
        type: String,
    },
    jobStatus: {
        type: String,
    },
    jobStatusName: {
      type: String
    },
    jobDuration: {
      type: String
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    educationLevel: {
      type: String,
    },
    birthDate: {
      type: String,
    },
    cityAddress: {
      type: String,
    },
    stateAddress: {
      type: String,
    },
    review: {
      type: String,
    },
    rating: {
      type: String,
    },
  },
  components: { Modal, JobCard, Button, ReviewModal },
  created() {
    console.log(this.state);
  },
  setup() {
    const state = reactive({
      isModalVisible: false as boolean,
      isReviewModalVisible: false as boolean,
    });
    function showModal(): void {
      state.isModalVisible = true;
    }
    function closeModal(): void {
      state.isModalVisible = false;
    }
    function finishJob(): void {
      console.log("Finished!");
    }
    function cancelJob(): void {
      console.log("Cancelled!");
    }
    function messageEmployee(): void {
      console.log("Messaged!");
    }
    function downloadInfo(): void {
      console.log("Downloading!");
    }
    function openLocation(): void {
      console.log("Opening map!");
    }
    function rateEmployee(): void {
      console.log("Rating!")
    }
    function openReviewModal(): void {
      state.isReviewModalVisible = true;
    }
    function closeReviewModal(): void {
      state.isReviewModalVisible = false;
    }
    function reviewEmployee(reviewInput: { review: string; rating: string }) {
      console.log("Reviewing: "+reviewInput.review+" - "+reviewInput.rating+" stars.")
    }
    return {
      state,
      showModal,
      closeModal,
      finishJob,
      cancelJob,
      messageEmployee,
      downloadInfo,
      openLocation,
      rateEmployee,
      openReviewModal,
      closeReviewModal,
      reviewEmployee,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal-header {
  display: block;
}
.candidate-modal-header {
  display: flex;
  align-items: center;
}
.icon {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  align-items: center;
}
.cardIcons {
  width: 3rem;
  height: 3rem;
  filter: $filter-blue;
  flex: 1;
}
.job-card {
  display: inline-block;
  margin: 1.5rem 1rem;
  text-align: initial;
}
.title-modal-row{
  margin-top: 0.5rem;
  display: flex;
}
.title-modal {
  margin-top: 0rem;
  padding-left: 50px;
  margin-left: 1rem;
  margin-block-end: 0rem;
  color: #000;
  font-weight: bold;
}
.icon-button{
      height: 2.5rem;
      filter: $filter-blue;
      cursor: pointer;
      margin: 0 1.5rem;
      &:hover {
        transform: scale(1.1);
      }
      &:disabled {
        opacity: 0.7;
      }
}
.fields-modal-row {
  margin-top: 0rem;
  padding: 0px 50px;
  margin-left: 1rem;
  margin-block-end: 0rem;
  display: flex;
  justify-content: space-between;
}
.fields-modal-column {
  width: -webkit-fill-available;
}
.info-title {
  color: $font-dark;
  display: flex;
}
.info-value {
  color: $font-gray;
  display: flex;
  padding-right: 1em;
}
.description {
  margin-bottom: 0;
}
.vue3-star-ratings__wrapper{
    padding: 0;
    margin: 0 10rem;
    margin-top: 2rem;
}
</style>
