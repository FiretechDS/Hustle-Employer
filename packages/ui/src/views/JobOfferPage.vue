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
    <HorizontalCard title='Desarrollador' salary=2000 location='Caracas' duration='36' last='24/08/2021'/>
  </div>
  <CreateOfferModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateOfferModal from "@/components/jobOffers/CreateOfferModal.vue";
import HorizontalCard from "@/components/HorizontalCard.vue";
export default defineComponent({
  components: { CreateOfferModal, HorizontalCard },
  name: "JobOfferPage",
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