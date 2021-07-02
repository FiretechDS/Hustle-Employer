<template>
  <div>
    <PlusButton :onClick="showModal" />
    <Modal v-show="state.isModalVisible" @close="closeModal()">
      <template v-slot:header> 
      Crear nueva oferta
      </template>
      <template v-slot:body>
        <div class="create-job-offer-body-div">
          <form class="create-job-offer-form">
            Trabajo:
            <input v-model="jobOffer.title" placeholder="Título">-
            <input v-model="jobOffer.location" placeholder="Localización"/>
            <input class="description-input" v-model="jobOffer.description" placeholder="Descripción">
            <br>Horario de Trabajo:
            <Multiselect 
              :options="jobOffer.schedules.options" v-bind="jobOffer.schedules"
              v-model="jobOffer.schedules.value" placeholder="Horario" 
              mode="multiple" class="schedule-multiselect"
            />
            Inicio:<input class="time-input" type="time" step="3600" v-model="jobOffer.startWorkTime" placeholder="Hora inicial de horario" min="07:00" max="24:00">
            Fin:<input class="time-input" type="time" step="3600" v-model="jobOffer.endWorkTime" placeholder="Hora final de horario" min="07:00" max="24:00">
            -<input type="number" v-model="jobOffer.hourlyRate" placeholder="Salario/Hora ($)">
            <br>Fecha tope:
            <input type="date" v-model="jobOffer.deadline" placeholder="Fecha tope (DD/MM/YYYY)">
            Tiempo estimado:
            <input type="number" v-model="jobOffer.duration" placeholder="Duración (horas)">
            <br>
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
      location: "" as string,
      deadline: "" as string,
      duration: "" as string,
      hourlyRate: "" as string,
      schedules: { 
        value:[],
        options:['monday','tuesday','wednesday','thursday','friday','saturday'] },
      startWorkTime: "" as string,
      endWorkTime: "" as string,
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

    function getTodayDate(): string{
      //función util para validaciones
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      
      return String(yyyy + '-' + mm + '-' + dd);
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
      createOffer,
    };
  },
});
</script>

<style lang="scss" scoped>

div{
  color: grey;
  padding: 10px;
  text-align: top left;
  display: inline;
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

textarea{
  resize: none;
  font-family: 'Poppins';
  margin: 10px;
  display: inline-block;
  border-radius: 10px;
  border-color: rgb(196, 196, 196);
  padding: 5px;
  width: 90%;
  background: rgba(197, 197, 197, 0.349);
  border-width: 2px;
  border-style: inset;
}

.description-input{
  width: 80%;
}

.schedule-input{
  padding: 0;
  margin: 30px;
  margin-left: 0px;
}

label{
  border-radius: 10px;
  border-color: rgb(196, 196, 196);
  border-style: inset;
  border-width: 2px;
  background: rgba(197, 197, 197, 0.349);
  padding: 3px;
  padding-right: 9px;
  padding-left: 0px;
  margin: 3px;
}

input[type="time"]::-webkit-calendar-picker-indicator {
    background: none;
}

</style>
