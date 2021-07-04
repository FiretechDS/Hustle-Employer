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
    <div class="error" v-if="state.kind === 'ErrorOfferState'">
      <h2 class>{{ state.reason }}</h2>
      <p>{{state.error}} </p>
    </div>
    <div class="empty" v-if="state.kind==='EmptyOffersState'">
      <h2>{{state.message}}</h2>
    </div>
    <div v-if="state.kind === 'LoadingOffersState'" class="loading">
      <FadeLoader color="#ffeda3"/>
    </div>
    <div v-if="state.kind === 'LoadedOffersState'">
      <div v-bind:key="job.id"
      v-for="job in state.offers">
        <OfferDetail
          :title="job.title"
          :description="job.specialRequirements"
          :salary="job.hourlyRate"
          :duration="job.duration"
          :deadline="job.deadline"
          :status="job.status"
          :schedule="{days: job.schedules,hourIn:job.startHour, hourOut:job.endHour}"
          :skills="job.skills"
        />
      </div>
    </div>
  </div>
  <CreateOfferModal  @createOffer="createOffer" :message="message.value" />
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue';
import CreateOfferModal from '@/components/jobOffers/CreateOfferModal.vue';
import OfferDetail from '@/components/jobOffers/OfferDetail.vue';
import { JobOfferPloc,jobPresentationProps } from '../../../../core/src/jobOffer/presentation';
import { usePlocState } from '../../common/UsePlocState';
import  FadeLoader from 'vue-spinner/src/FadeLoader.vue';

export default defineComponent({
  components: { CreateOfferModal, OfferDetail, FadeLoader },
  name: 'JobOfferMain',
  setup() {
    const ploc = inject<JobOfferPloc>('jobOfferPloc') as JobOfferPloc;
    const state = usePlocState(ploc);
    const message = reactive({value:'' as string})
    async function createOffer(offer:jobPresentationProps){
      message.value=''
      try {
        message.value = await ploc.createOffer(offer);
      } catch (error) {
        message.value=error.message;
      }
    }
    return { state,createOffer,message };
  },
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
  .error{
    text-align:center;
    margin-top:20vh;
    color:$highlit-yellow;
  }
  .empty{
    text-align:center;
    margin-top:20vh;
    color:$white;
  }
  .loading{
    text-align:center;
    margin-top:25vh;
    color:$white;
    margin-left: 80vh;
  }
}
</style>
