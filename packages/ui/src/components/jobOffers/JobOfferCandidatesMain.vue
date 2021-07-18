<template>
  <div class="candidatePageCointainer">
    <div class="header">
        <h2 class="job-title">UI/UX Developer</h2>
        <p class="total-candidates">Total Candidates: 8</p>
        <div class="candidates-sorter">
          <p class="sorter-text">Show</p>
          <select class="sorter-select" v-model="sortType.value">
            <option value="mostRecent">Most Recent</option>
            <option value="oldest">Oldest</option>
            <option value="mostRated">Most Rated</option>
            <option value="nameAtoZ">By name (A-Z)</option>
            <option value="nameZtoA">By name (Z-A)</option>
          </select>
        </div>
    </div>
    <!--div class="error" v-if="state.kind === 'ErrorOfferState'">
      <img :src="require('@/assets/svg/disconnected.svg')" />
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
          v-if="(offerFilter.active&&job.status==='Open')||(!offerFilter.active&&job.status==='Posted')"
          :title="job.title"
          :description="job.specialRequirements"
          :salary="job.hourlyRate"
          :duration="job.duration"
          :deadline="job.deadline"
          :status="job.status"
          :schedule="{days: job.schedules,hourIn:job.startHour, hourOut:job.endHour}"
          :skills="job.skills"
          :location="job.location"
          :areOffersActive="offerFilter.active"
        />
      </div>
    </div-->
    <div class="candidate-cards">
      <SmallCard firstName='Luis' lastName='Castilo' date='2021-07-11'/>
      <SmallCard firstName='Sebastian' lastName='González' date='2021-07-13'/>
      <SmallCard firstName='David' lastName='Ortuño' date='2021-07-17'/>
      <SmallCard firstName='Lionel' lastName='Messi' date='2021-07-11'/>
      <SmallCard firstName='Cristiano' lastName='Ronaldo' date='2021-07-13'/>
      <SmallCard firstName='Juan José' lastName='Pérez' date='2021-07-17'/>
      <SmallCard firstName='Pep' lastName='Guardiola' date='2021-07-17'/>
      <SmallCard firstName='Jose' lastName='Mourinho' date='2021-07-17'/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue';
import  SmallCard from '@/components/SmallCard.vue';
export default defineComponent({
  components: {SmallCard},
  name: 'JobOfferCandidatesMain',
  setup(){
    const sortType = reactive({value:'mostRecent' as String})
    return{sortType}
  }
})
</script>

<style lang="scss" scoped>
.candidatePageCointainer {
  color: $white;
  margin: 5rem 10rem;
  display: flex;
  flex-direction: column;
  .header{
      display: flex;
      margin: 0 10vw//10rem;
  }
  .job-title {
    font-size: $medium-font;
    width: fit-content;
  }
  .total-candidates{
      background: white;
      border-radius: 8px;
      text-align: center;
      color: black;
      align-self: center;
      padding: 1rem;
      margin: auto;
  }
    .candidates-sorter{
    background: white;
    color: #000;
    display: flex;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    align-items: center;
    height: fit-content;
    align-self: center;
  }
  .sorter-text{
    margin: 0;
    margin-right: 1rem;
  }
  .sorter-select{
    height: 3rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    border: 0;
    outline: 0;
  }
  .error{
    text-align:center;
    margin-top:12vh;
    color:$highlit-yellow;
    img{
      width: 25rem;
      height: 25rem;
      filter: $filter-blue;
    }
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
  .candidate-cards{
      //text-align: center;
      //margin: 0 8vw;
      margin: 0 0 0 7vw;
  }
  .small-card{
      display: inline-block;
      margin: 1.5rem 2vw;
      text-align: initial;
  }
}
</style>
