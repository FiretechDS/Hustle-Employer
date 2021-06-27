<template>
  <div class="jobPageCointainer">
    <h2 class="title">Ofertas creadas</h2>
    <ul class="columns-job-offer">
      <li>Titulo</li>
      <li class="small-columns-job-offer">Pago</li>
      <li class="small-columns-job-offer">Ubicacion</li>
      <li class="small-columns-job-offer">Duración</li>
      <li class="small-columns-job-offer">Fecha tope</li>
    </ul> 
    <OfferDetail title='Desarrollador UI' salary=3000 location='Caracas' duration='36' last='24/08/2021' :schedule="schedule" :skills="skills"/>
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
        {
          id: 1, day:'lun', hourIn: '8:00 am', hourOut: '3:30 pm'
        },
        {
          id: 2, day:'mar', hourIn: '8:00 am', hourOut: '3:30 pm'
        },
      ],
      skills: [
        {
          id: 1, description: 'Conocimientos medios en Vue.js'
        },
        {
          id: 2, description: 'Conocimientos medios en CSS'
        },
        {
          id: 3, description: 'Conocimientos medios en HTML'
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