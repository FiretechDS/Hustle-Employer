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
            <input type="date" v-model="jobOffer.deadline" placeholder="Fecha tope (DD/MM/YYYY)">
            <input type="number" v-model="jobOffer.duration" placeholder="Duración (horas)">
            <input type="number" v-model="jobOffer.hourlyRate" placeholder="Salario/Hora">
            <Multiselect 
              :options="jobOffer.schedules.options" v-bind="jobOffer.schedules"
              v-model="jobOffer.schedules.value" placeholder="Horario" 
              mode="multiple"
            />
            <input v-model="jobOffer.skills[0]" placeholder="Habilidades"/>
          </form>
        </div>
      </template>
      <template v-slot:footer>
        <div class="create-job-offer-footer">
          <Button buttonText="Crear" iconName="paper-plane.svg" :isPrimary="true" :onClick="createOffer"/> 
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import PlusButton from "../PlusButton.vue";
import Modal from "../Modal.vue";
import Button from "../Button.vue";
import Multiselect from '@vueform/multiselect'
export default defineComponent({
  name: "CreateOfferModal",
  components: { Modal, PlusButton, Button,Multiselect },
  setup() {
    const state = reactive({
      isModalVisible: false as boolean,
    });
    const jobOffer = reactive({
      title: "" as string,
      description: "" as string,
      deadline: "" as string,
      duration: "" as string,
      hourlyRate: "" as string,
      schedules: { 
        value:[],
        options:['monday','tuesday','wednesday','thursday','friday','saturday'] },
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
      console.log(jobOffer)
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
.create-job-offer-form{
  margin: 1rem 1rem;
}
input{
  font-family: 'Poppins';
  margin: 10px;
  display: inline-block;
  border-radius: 10px;
  border-color: transparent;
  padding: 5px;
  width: 20%;
  color:$font-gray;
  background: $lighter-gray;
}

Button{
  margin-left: auto;
  
}

.description-input{
  width: 80%;

}

</style>
