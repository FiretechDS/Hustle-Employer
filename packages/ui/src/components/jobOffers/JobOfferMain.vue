<template>
  <div class="jobPageCointainer">
    <ArchiveActiveButtons @handleClick="handleFilter" />
    <h2 class="title">
      {{ offerFilter.active ? "Published" : "Archived" }} Offers
    </h2>
    <ul class="columns-job-offer">
      <li>Title</li>
      <li class="small-columns-job-offer">Rate/hour</li>
      <li class="small-columns-job-offer">Duration</li>
      <li class="small-columns-job-offer">Deadline</li>
      <li class="small-columns-job-offer">Status</li>
    </ul>
    <div class="error" v-if="state.kind === 'ErrorOfferState'">
      <img :src="require('@/assets/svg/disconnected.svg')" />
      <h2 class>{{ state.reason }}</h2>
      <p>{{ state.error }}</p>
    </div>
    <div class="empty" v-if="state.kind === 'EmptyOffersState'">
      <h2>{{ state.message }}</h2>
    </div>
    <div v-if="state.kind === 'LoadingOffersState'" class="loading">
      <Loader color="#ffeda3" />
    </div>
    <div v-if="state.kind === 'LoadedOffersState'">
      <perfect-scrollbar>
        <div v-bind:key="job.id" v-for="job in state.offers">
          <OfferDetail
            class="card"
            v-if="
              (offerFilter.active && job.status === 'Open') ||
              job.status === 'Closed' ||
              (!offerFilter.active && job.status === 'Posted') ||
              job.status === 'Cancelled'
            "
            :title="job.title"
            :description="job.specialRequirements"
            :salary="job.hourlyRate"
            :duration="job.duration"
            :deadline="job.deadline"
            :status="job.status"
            :schedule="{
              days: job.schedules,
              hourIn: job.startHour,
              hourOut: job.endHour,
            }"
            :skills="job.skills"
            :location="job.location"
            :areOffersActive="offerFilter.active"
            :id="job.id"
          />
        </div>
      </perfect-scrollbar>
    </div>
  </div>
  <CreateOfferModal
    @createOffer="createOffer"
    @resetMsg="resetMsg"
    :message="message"
  />
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from "vue";
import CreateOfferModal from "@/components/jobOffers/CreateOfferModal.vue";
import OfferDetail from "@/components/jobOffers/OfferDetail.vue";
import {
  JobOfferPloc,
  jobPresentationProps,
} from "../../../../core/src/jobOffer/presentation";
import { usePlocState } from "../../common/UsePlocState";
import Loader from "@/components/Loader.vue";
import ArchiveActiveButtons from "./ArchiveActiveButtons.vue";
import Button from "../Button.vue";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
export default defineComponent({
  components: {
    CreateOfferModal,
    OfferDetail,
    Loader,
    ArchiveActiveButtons,
    Button,
  },
  name: "JobOfferMain",
  setup() {
    const ploc = inject<JobOfferPloc>("jobOfferPloc") as JobOfferPloc;
    const state = usePlocState(ploc);
    const message = reactive({
      value: "" as string,
      loading: false as boolean,
    });
    const offerFilter = reactive({ active: true });

    function handleFilter(active: boolean): void {
      offerFilter.active = active;
    }
    function resetMsg(): void {
      message.value = "";
    }
    async function createOffer(offer: jobPresentationProps): Promise<void> {
      resetMsg();
      message.loading = true;
      const result = await ploc.createOffer(offer);
      message.value = result.value;
      if (result.success)
        createToast("Offer created", {
          type: "success",
          toastBackgroundColor: "#39a9cb",
          position: "bottom-center",
          showIcon: true,
        });
      message.loading = false;
    }
    return {
      ploc,
      state,
      createOffer,
      message,
      offerFilter,
      handleFilter,
      resetMsg,
    };
  },
});
</script>

<style lang="scss" scoped>
.jobPageCointainer {
  color: $white;
  margin: 5rem 19rem;
  display: flex;
  flex-direction: column;
  .title {
    font-size: $medium-font;
  }
  .error {
    text-align: center;
    margin-top: 12vh;
    color: $highlit-yellow;
    img {
      width: 25rem;
      height: 25rem;
      filter: $filter-blue;
    }
  }
  .empty {
    text-align: center;
    margin-top: 20vh;
    color: $white;
  }
  .loading {
    text-align: center;
    margin-top: 25vh;
    color: $white;
    margin-left: auto;
    margin-right: auto;
  }
  .ps {
    height: 58vh;
  }
  @media only screen and (max-width: 690px) {
    .jobPageCointainer {
      align-items: center;
    }
  }
}
</style>
