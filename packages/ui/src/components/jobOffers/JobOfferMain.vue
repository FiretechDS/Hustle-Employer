<template>
  <div class="jobPageCointainer">
    <h2 class="title">Published Offers</h2>
    <ul class="columns-job-offer">
      <li>Title</li>
      <li class="small-columns-job-offer">Rate/hour</li>
      <li class="small-columns-job-offer">Duration</li>
      <li class="small-columns-job-offer">Deadline</li>
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
      <Loader color="#ffeda3"/>
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
  <CreateOfferModal  @createOffer="createOffer" :message="message" />
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue';
import CreateOfferModal from '@/components/jobOffers/CreateOfferModal.vue';
import OfferDetail from '@/components/jobOffers/OfferDetail.vue';
import { JobOfferPloc,jobPresentationProps } from '../../../../core/src/jobOffer/presentation';
import { usePlocState } from '../../common/UsePlocState';
import  Loader from '@/components/Loader.vue';

export default defineComponent({
  components: { CreateOfferModal, OfferDetail, Loader },
  name: 'JobOfferMain',
  setup() {
    const ploc = inject<JobOfferPloc>('jobOfferPloc') as JobOfferPloc;
    const state = usePlocState(ploc);
    const message = reactive({value:'' as string, loading:false as boolean})
    async function createOffer(offer:jobPresentationProps){
      message.value=''
      message.loading=true
      try {
        message.value = await ploc.createOffer(offer);
      } catch (error) {
        message.value=error.message;
      }
      message.loading=false
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
    margin-left:auto;
    margin-right: auto;
  }
}
</style>
