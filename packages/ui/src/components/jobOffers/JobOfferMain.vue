<template>
  <div class="jobPageCointainer">
    <ArchiveActiveButtons @handleClick="handleFilter" />
    <div class="title-section">
      <img
        :src="require('@/assets/svg/refresh.svg')"
        alt="refresh"
        class="refresh"
        @click="reload"
      />
      <h2 class="title">
        {{ offerFilter.active ? "Published" : "Archived" }} Offers
      </h2>
    </div>
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
      <img :src="require('@/assets/svg/empty.svg')" />
      <h2>{{ state.message }}</h2>
    </div>
    <div v-if="state.kind === 'LoadingOffersState'" class="loading">
      <Loader color="#ffeda3" />
    </div>
    <div v-if="state.kind === 'LoadedOffersState'">
      <div v-if="offerFilter.active">
        <div class="empty" v-if="state.activeOffers.length === 0">
          <img :src="require('@/assets/svg/empty.svg')" />
          <h2>You've no published offers currently.</h2>
        </div>
        <div v-bind:key="job.id" v-for="job in state.activeOffers">
          <OfferDetail
            class="card"
            :offer="job"
            :areOffersActive="offerFilter.active"
          />
        </div>
      </div>
      <div v-else>
        <div class="empty" v-if="state.archiveOffers.length === 0">
          <img :src="require('@/assets/svg/empty.svg')" />
          <h2>You've no archived offers currently.</h2>
        </div>
        <div v-else>
          <div v-bind:key="job.id" v-for="job in state.archiveOffers">
            <OfferDetail
              class="card"
              :offer="job"
              :areOffersActive="offerFilter.active"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <CreateOfferModal
    @createOffer="createOffer"
    @resetMsg="resetMsg"
    :message="message"
  />
</template>

<script lang="ts">
import { defineComponent, inject, onBeforeMount, reactive, watch } from "vue";
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
import { useStore } from "vuex";
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
    const store = useStore();
    console.log(store.getters["authModule/user"]);
    //ploc.setEmployer(store.getters["authModule/user"]);
    const state = usePlocState(ploc);
    const message = reactive({
      value: "" as string,
      loading: false as boolean,
    });
    onBeforeMount(() => {
      ploc.setEmployer(store.getters["authModule/user"]);
    });
    const offerFilter = reactive({ active: true });

    function handleFilter(active: boolean): void {
      offerFilter.active = active;
    }
    function resetMsg(): void {
      message.value = "";
    }

    function reload(): void {
      ploc.reload();
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
      reload,
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
  .title-section {
    display: flex;
    align-items: center;
    .refresh {
      width: 3rem;
      height: 3rem;
      filter: $filter-white;
      margin-right: 1rem;
      cursor: pointer;
    }
    .title {
      font-size: $medium-font;
    }
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
    margin-top: 12vh;
    color: $white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      filter: $filter-blue;
      width: 25rem;
      height: 25rem;
    }
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
