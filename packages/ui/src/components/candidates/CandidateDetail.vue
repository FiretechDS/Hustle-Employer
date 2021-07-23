<template>
  <SmallCard
    :onClick="showModal"
    :firstName="firstName"
    :lastName="lastName"
    :date="dateApplied"
  />
  <Modal v-show="state.isModalVisible" @close="closeModal()">
    <template v-slot:header class="modal-header-aye">
      <div class="candidate-modal-header">
        <div>{{ firstName }} {{ middleName }} {{ lastName }}</div>
        <div class="rate-stars">5 stars</div>
        <div class="rounded-logo">{{ firstName[0] }}{{ lastName[0] }}</div>
      </div>
    </template>
    <template v-slot:body>
      <p class="title-modal">Personal Information</p>
      <div class="fields-modal-row">
        <div class="fields-modal-column">
          <p class="info-title">Contact</p>
          <p class="info-value">{{ phoneNumber }}</p>
        </div>
        <div class="fields-modal-column">
          <p class="info-title">Education Level</p>
          <p class="info-value">{{ educationLevel }}</p>
        </div>
        <div class="fields-modal-column">
          <p class="info-title">Birth Date</p>
          <p class="info-value">{{ birthDate }}</p>
        </div>
      </div>
      <div class="fields-modal-row">
        <div class="fields-modal-column">
          <p class="info-title">State</p>
          <p class="info-value">{{ stateAddress }}</p>
        </div>
        <div class="fields-modal-column">
          <p class="info-title">City</p>
          <p class="info-value">{{ cityAddress }}</p>
        </div>
        <div class="fields-modal-column">
          <p class="info-title">Street</p>
          <p class="info-value">{{ streetAddress }}</p>
        </div>
      </div>
      <p class="title-modal">Work Information</p>
      <div class="fields-modal-row">
        <div class="fields-modal-column">
          <p class="info-title">Certificates</p>
          <li class="info-list-values">
            <p
              class="info-value"
              v-for="certificate in certificates"
              :key="certificate.name"
            >
              {{ certificate.name }}
            </p>
          </li>
        </div>
        <div class="fields-modal-column">
          <p class="info-title">Skills</p>
          <li class="info-list-values">
            <p class="info-value" v-for="skill in skills" :key="skill.name">
              {{ skill.name }}
            </p>
          </li>
        </div>
      </div>
      <div class="fields-modal-row">
        <div class="fields-modal-column">
          <p class="info-title">Work Experience</p>
          <li class="info-list-values">
            <p
              class="info-value"
              v-for="work in workExperience"
              :key="work.name"
            >
              {{ work.name }}
            </p>
          </li>
        </div>
        <div class="fields-modal-column">
          <p class="info-title">References</p>
          <li class="info-list-values">
            <p
              class="info-value"
              v-for="reference in references"
              :key="reference.name"
            >
              {{ reference.name }}
            </p>
          </li>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="offer-detail-footer">
        <ul class="footer-offer-detail">
          <li>
            <Button
              buttonText="Video"
              iconName="play-video.svg"
              :isPrimary="true"
              @click="playVideo()"
            />
          </li>
          <li>
            <Button
              buttonText="Approve"
              iconName="check.svg"
              :isPrimary="false"
              @click="approveCandidate()"
            />
          </li>
          <li>
            <Button
              buttonText="Reject"
              iconName="cancel.svg"
              :isPrimary="false"
              @click="rejectCandidate()"
            />
          </li>
        </ul>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from "vue";
import SmallCard from "@/components/SmallCard.vue";
import Modal from "../Modal.vue";
import Button from "../Button.vue";

export default defineComponent({
  name: "OfferDetail",
  props: {
    firstName: {
      type: String,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    dateApplied: {
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
    streetAddress: {
      type: String,
    },
    cityAddress: {
      type: String,
    },
    stateAddress: {
      type: String,
    },
    certificates: {
      type: Array as PropType<{ name: string }[]>,
    },
    skills: {
      type: Array as PropType<{ name: string }[]>,
    },
    workExperience: {
      type: Array as PropType<{ name: string }[]>,
    },
    references: {
      type: Array as PropType<{ name: string }[]>,
    },
  },
  components: { Modal, SmallCard, Button },
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
.modal-header {
  display: block;
}
.candidate-modal-header {
  display: flex;
  align-items: center;
}
.rate-stars {
  margin: auto;
  color: white;
}
.rounded-logo {
  background: #ffeda3;
  color: #29293a;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  align-items: center;
  margin-right: 0rem;
  font-weight: bold;
  font-size: 2rem;
  margin-right: 2em;
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
.small-card {
  display: inline-block;
  margin: 1.5rem 1rem;
  text-align: initial;
}
.title-modal {
  margin-top: 0rem;
  padding: 0px 50px;
  margin-left: 1rem;
  margin-block-end: 0rem;
  color: #000;
  font-weight: bold;
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
  //width: 33%;
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
.info-list-values {
  display: block;
  margin-bottom: 1em;
  .info-value {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
