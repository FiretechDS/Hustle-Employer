<template>
  <div class="jobPageCointainer">
    <h2 class="title">Ofertas creadas</h2>
    <ul class="columns-job-offer">
      <li>Titulo</li>
      <li class="small-columns-job-offer">Pago/hora</li>
      <li class="small-columns-job-offer">Duración/horas</li>
      <li class="small-columns-job-offer">Fecha tope</li>
      <li class="small-columns-job-offer">Status</li>
    </ul> 
    <div v-if="state.kind==='ErrorOfferState'" >
      <h2> {{state.error}}} </h2>
    </div>
    <div v-if="state.kind==='LoadedOffersState'" >
      <OfferDetail v-bind:key="job.id"  v-for="job in state.offers" :title="job.title" :description="job.specialRequirements" :salary="job.hourlyRate" :duration="job.duration" :deadline="job.deadline" :status="job.status" :schedule="job.schedules" :skills="job.skills"/>
    </div>
  </div>
  <CreateOfferModal/>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import CreateOfferModal from "@/components/jobOffers/CreateOfferModal.vue";
import OfferDetail from "@/components/jobOffers/OfferDetail.vue"
import { JobOfferPloc } from "../../../core/src/jobOffer/presentation";
import { usePlocState } from "../common/UsePlocState";

export default defineComponent({
  components: { CreateOfferModal, OfferDetail },
  name: "JobOfferPage",
  setup(){
    const ploc = inject<JobOfferPloc>("jobOfferPloc") as JobOfferPloc
    const state = usePlocState(ploc)
    return {state}
  }
});
</script>

<style lang="scss" scoped>
.jobPageCointainer {
  color: $white;
  margin: 5rem 10rem;
  display: flex;
  flex-direction: column;
  .title {
    font-size: $medium-font;
  }

  
}
</style>