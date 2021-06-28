<template>
  <div>
    <PlusButton :onClick="showModal" />
    <Modal v-show="state.isModalVisible" @close="closeModal">
      <template v-slot:header> 
        <h2>Crear nueva oferta</h2> 
      </template>
      <template v-slot:body>
        <div class="create-job-offer-body-div">
          <form class="create-job-offer-form">
            <input v-model="jobOffer.title" placeholder="Título">
            <input class="description-input" v-model="jobOffer.description" placeholder="Descripción">
            <input v-model="jobOffer.deadline" placeholder="Fecha tope (DD/MM/YYYY)">
            <input v-model="jobOffer.duration" placeholder="Duración (horas)">
            <input v-model="jobOffer.hourlyRate" placeholder="Salario/Hora">
            <input v-model="jobOffer.schedules[0]" placeholder="Horarios">
            <input v-model="jobOffer.skills[0]" placeholder="Habilidades">
          </form>
        </div>
      </template>
      <template v-slot:footer>
        <div class="create-job-offer-footer">
          <Button buttonText="Crear Oferta" iconName="paper-plane.svg" isPrimary=true :onClick="createOffer"/> 
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import PlusButton from "../PlusButton.vue";
import Modal from "../Modal.vue";
import Button from "../Button.vue"
export default defineComponent({
  name: "CreateOfferModal",
  components: { Modal, PlusButton, Button },
  setup() {
    const state = reactive({
      isModalVisible: false as boolean
    });

    const jobOffer = reactive({
      title: "" as string,
      description: "" as string,
      deadline: "" as string,
      duration: "" as string,
      hourlyRate: "" as string,
      schedules: [] as Array<string>,
      skills: [] as Array<string>,
    });

    function showModal(): void {
      state.isModalVisible = true;
      console.log("open");
    }
    function closeModal(): void {
      state.isModalVisible = false;
      console.log("closed");
    }

    function createOffer(): void {
      console.log("created");
    }


    return {
      state,
      jobOffer,
      showModal,
      closeModal,
      createOffer
    };
  },
});
</script>

<style lang="scss" scoped>

div{
  color: grey;
}

input{
  font-family: 'Poppins';
  margin: 10px;
  display: inline-block;
  border-radius: 10px;
  border-color: rgb(196, 196, 196);
  padding: 5px;
  width: 20%;
  background: rgba(197, 197, 197, 0.349);
}

Button{
  margin-left: auto;
  
}

.description-input{
  width: 80%;

}

</style>
