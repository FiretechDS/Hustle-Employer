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
    <OfferDetail title='Desarrollador UI' salary=3000 status='Posted' duration='36' deadline='24/08/2021' :schedule="schedule" :skills="skills"/>
    <OfferDetail :title="job.title" :salary="job.payment" :duration="job.duration" deadline="24/08/2020" :status="job.status" :schedule="schedule" :skills="skills"/>
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
      schedule: [
        ['tuesday','monday'],
        ['friday','monday']
      ],
      skills: [
        {
         name: 'Cook', category: 'tecnhical'
        },
        {
          name: 'Clean', category: 'soft'
        },
      ],
      job: {
        title: 'New job',
        specialRequirements: 'None',
        duration: 400,
        deadline: '2020-07-27T00:00:00.000Z',
        skills:[
          {name: 'Cook', category: 'tecnhical'},
          {name: 'Clean', category: 'soft'}
        ],
        status: 'Canceled',
        payment: 200,
        schedules: [['tuesday','monday'],['friday','monday']]
      }
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