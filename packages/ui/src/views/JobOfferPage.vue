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
    <div v-for="job in jobs" :key="job.title">
      <OfferDetail :title="job.title" :description="job.specialRequirements" :salary="job.payment" :duration="job.duration" :deadline="job.deadline" :status="job.status" :schedule="job.schedules" :skills="job.skills"/>
    </div>
  </div>
  <CreateOfferModal/>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";
import CreateOfferModal from "@/components/jobOffers/CreateOfferModal.vue";
import OfferDetail from "@/components/jobOffers/OfferDetail.vue"

export default defineComponent({
  components: { CreateOfferModal, OfferDetail },
  name: "JobOfferPage",
  data(){
    return{
      
      jobs: [
        {
        title: 'Back-End Developer',
        specialRequirements: 'None',
        duration: 400,
        deadline: '08/08/2021 02:21 pm',
        skills:[
          {name: 'Cook', category: 'tecnhical'},
          {name: 'Clean', category: 'soft'}
        ],
        status: 'Canceled',
        payment: 200,
        schedules: [['tuesday','monday'],['friday','monday']]
        },
        {
        title: 'Desarrollador UI',
        specialRequirements: 'None',
        duration: 500,
        deadline: '17/07/2021 02:21 pm',
        skills:[
          {name: 'Climb', category: 'tecnhical'},
          {name: 'Clean', category: 'Blue'}
        ],
        status: 'Posted',
        payment: 250,
        schedules: [['tuesday','monday'],['friday','monday']]
        },
        {
        title: 'Full Stack',
        specialRequirements: 'None',
        duration: 400,
        deadline: '10/08/2021 02:21 pm',
        skills:[
          {name: 'Cook', category: 'tecnhical'},
          {name: 'Clean', category: 'soft'}
        ],
        status: 'Canceled',
        payment: 500,
        schedules: [['tuesday','monday'],['friday','monday']]
        }
      ]
    }
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