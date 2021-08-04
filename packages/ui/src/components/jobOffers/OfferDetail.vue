<template>
  <div>
    <HorizontalCard
      :title="offer.title"
      :salary="offer.hourlyRate"
      :status="offer.status"
      :duration="offer.duration"
      :deadline="offer.deadline"
      :onClick="showModal"
    >
      <template v-slot:buttons v-if="state.loading">
        <div class="loader">
          <Loader class="loader" color="#39a9cb" size="8px" />
        </div>
      </template>
      <template v-slot:buttons v-else-if="areOffersActive && !state.loading">
        <div class="icon tooltip" @click.stop>
          <img
            class="cardIcons highlight-icon"
            :src="require('@/assets/svg/postulantes.svg')"
          />
          <span class="tooltiptext"> Candidate </span>
        </div>
        <div class="icon tooltip" @click.stop>
          <img
            class="cardIcons highlight-icon"
            :src="require('@/assets/svg/edit.svg')"
          />
          <span class="tooltiptext"> Update </span>
        </div>
        <div class="icon tooltip" @click.stop @click="fileOrPublish('Posted')">
          <img
            class="cardIcons highlight-icon"
            :src="require('@/assets/svg/archive.svg')"
          />
          <span class="tooltiptext"> Archive </span>
        </div>
        <div class="icon tooltip" @click.stop @click="showModal">
          <img
            class="cardIcons highlight-icon"
            :src="require('@/assets/svg/more.svg')"
          />
          <span class="tooltiptext"> Details </span>
        </div>
      </template>
      <template v-slot:buttons v-else>
        <div class="icon tooltip" @click.stop @click="fileOrPublish('Open')">
          <img
            class="cardIcons highlight-icon"
            :src="require('@/assets/svg/paper-plane.svg')"
          />
          <span class="tooltiptext"> Publish </span>
        </div>
        <div class="icon tooltip" @click.stop @click="duplicate">
          <img
            class="cardIcons highlight-icon"
            :src="require('@/assets/svg/duplicate.svg')"
          />
          <span class="tooltiptext"> Duplicate </span>
        </div>
        <div class="icon tooltip" @click.stop>
          <img
            class="cardIcons highlight-icon"
            :src="require('@/assets/svg/edit.svg')"
          />
          <span class="tooltiptext"> Update </span>
        </div>
        <div class="icon tooltip" @click.stop @click="deleteModal">
          <img
            class="cardIcons highlight-icon"
            :src="require('@/assets/svg/delete.svg')"
          />
          <span class="tooltiptext"> Delete </span>
        </div>
      </template>
    </HorizontalCard>
    <Modal v-show="state.isModalVisible" @close="closeModal()">
      <template v-slot:header> {{ offer.title }}</template>
      <template v-slot:body>
        <p class="fields-modal-offer value-modal-offer">
          {{ offer.specialRequirements }}
        </p>

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
              <p class="value-modal-offer">${{ offer.hourlyRate }}</p>
            </li>
            <li class="small-columns-modal-offer-detail">
              <p class="value-modal-offer">{{ offer.duration }} hours</p>
            </li>
            <li class="small-columns-modal-offer-detail">
              <p class="value-modal-offer">{{ offer.deadline }}</p>
            </li>
          </ul>
        </div>
        <div class="listRow">
          <div class="flexRow">
            <p class="title-modal-offer">Schedule</p>
            <perfect-scrollbar>
              <ul class="list-modal-offer">
                <li
                  v-for="day in offer.schedules"
                  :key="offer.schedules.indexOf(day)"
                >
                  <div class="value-modal-offer">
                    <p>
                      {{ day }} {{ offer.startHour }}:00 -{{ offer.endHour }}:00
                    </p>
                  </div>
                </li>
              </ul>
            </perfect-scrollbar>
          </div>
          <div class="flexRow">
            <p class="title-modal-offer">Required Skills</p>
            <perfect-scrollbar>
              <ul class="list-modal-offer">
                <li v-for="skill in offer.skills" :key="skill.name">
                  <div class="value-modal-offer">
                    <p>
                      {{ skill.name }}
                    </p>
                  </div>
                </li>
              </ul>
            </perfect-scrollbar>
          </div>
          <div class="flexRow">
            <p class="title-modal-offer">Address</p>
            <p class="value-modal-offer">{{ offer.location }}</p>
          </div>
        </div>
        <div class="fields-modal-offer">
          <ul class="columns-modal-offer-detail">
            <li>
              <p class="title-modal-offer">Location</p>
            </li>
          </ul>
        </div>
        <MapComponent
          :position="providePosition"
          :styling="{
            height: '20rem',
            width: '80%',
            'margin-right': 'auto',
            'margin-left': 'auto',
            'border-radius': '5px',
            'margin-top': '2rem',
          }"
          :zoom="10"
        />
      </template>
      <template v-slot:footer>
        <div class="offer-detail-footer">
          <ul v-if="areOffersActive" class="footer-offer-detail">
            <li>
              <router-link :to="`/candidates/${offer.id}`">
                <Button
                  buttonText="Applicants"
                  iconName="postulantes.svg"
                  :styles="{ width: '15rem' }"
                  :isPrimary="false"
                />
              </router-link>
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
                @click="fileOrPublish('Posted')"
              />
            </li>
          </ul>
          <ul v-else class="footer-offer-detail">
            <li>
              <Button
                buttonText="Publish"
                iconName="paper-plane.svg"
                :isPrimary="false"
                @click="fileOrPublish('Open')"
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
                buttonText="Delete"
                iconName="delete.svg"
                :isPrimary="false"
                @click="deleteModal"
              />
            </li>
          </ul>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, inject, computed } from "vue";
import HorizontalCard from "@/components/HorizontalCard.vue";
import Modal from "../Modal.vue";
import Button from "../Button.vue";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import {
  JobOfferPloc,
  jobPresentationProps,
} from "../../../../core/src/jobOffer/presentation";
import { useConfirm } from "primevue/useconfirm";
import Loader from "../Loader.vue";
import MapComponent from "../map/MapComponent.vue";

export default defineComponent({
  name: "OfferDetail",
  props: {
    offer: {
      type: Object as () => jobPresentationProps,
      required: true,
    },
    areOffersActive: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  components: { Modal, HorizontalCard, Button, Loader, MapComponent },
  setup(props) {
    const state = reactive({
      isModalVisible: false as boolean,
      loading: false as boolean,
    });
    const ploc = inject<JobOfferPloc>("jobOfferPloc") as JobOfferPloc;
    const confirm = useConfirm();
    function showModal(): void {
      state.isModalVisible = true;
      console.log(ploc);
    }
    function closeModal(): void {
      state.isModalVisible = false;
    }

    const providePosition = computed(() => {
      return {
        lat: props.offer.latitude,
        lng: props.offer.longitude,
      };
    });
    function deleteModal() {
      confirm.require({
        message: `Are you sure you want to delete ${props.offer.title}?`,
        header: "Delete Offer",
        accept: () => {
          deleteOffer();
        },
        reject: () => {
          //callback to execute when user rejects the action
        },
      });
    }
    function toast(message: string, success: boolean): void {
      createToast(message, {
        type: success ? "success" : "warning",
        toastBackgroundColor: "#39a9cb",
        position: "bottom-center",
        showIcon: true,
      });
    }
    async function deleteOffer() {
      state.loading = true;
      const result = await ploc.deleteOffer(props.offer.id);
      toast(result.value, result.success);
    }
    async function fileOrPublish(status: "Posted" | "Open"): Promise<void> {
      state.loading = true;
      const result = await ploc.updateOffer(props.offer.id, {
        ...props.offer,
        status: status,
      });
      const msg = result.success
        ? `${props.offer.title} was moved to ${
            status === "Posted" ? "archive" : "published"
          }.`
        : result.value;
      toast(msg, result.success);
      state.loading = false;
    }

    async function duplicate(): Promise<void> {
      state.loading = true;
      const result = await ploc.createOffer(props.offer);
      const msg = `${
        result.success ? "Offer duplicated succesfully" : result.value
      }`;
      toast(msg, result.success);
      state.loading = false;
    }
    return {
      state,
      showModal,
      closeModal,
      deleteModal,
      fileOrPublish,
      duplicate,
      providePosition,
    };
  },
});
</script>

<style lang="scss" scoped>
.icon {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  align-items: center;
}
.listRow {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 5rem;
  width: 85%;
  //padding-right: 13rem;
  margin-left: 1rem;
  /*:first-child {
    flex: 0;
    width: 19.2rem;
  }*/
  .flexRow {
    flex: 1;
  }
}
.cardIcons {
  width: 3rem;
  height: 3rem;
  filter: $filter-blue;
  flex: 1;
}
.ps {
  min-height: 6rem;
  max-height: 12rem;
  // width: 20rem;
}
.loader {
  height: 1.5rem;
  margin-left: 4rem;
}
</style>