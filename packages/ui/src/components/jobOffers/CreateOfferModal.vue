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
            Título:
            <input v-model="jobOffer.title" placeholder="Título">
            <br>Descripción:<br>
            <textarea v-model="jobOffer.description" rows = "3" cols = "60" placeholder="Descripción"></textarea>
            <br>Duracion:
            <input v-model="jobOffer.duration" placeholder="Duración (horas)">
            Salario:
            <input v-model="jobOffer.hourlyRate" placeholder="Salario/Hora">
            <br>Fecha Tope:
            <input type="date" id="start" min="2021-07-01" v-model="jobOffer.deadline">
            Vacantes:
            <input v-model="jobOffer.vacancy" placeholder="Vacantes">
            <br>Habilidades requeridas:
            <input v-model="jobOffer.skills[0]" placeholder="Habilidades">
            <br><div class="schedule-input">
              Horario:
              <label v-for="day in days" :key="day">
              <input type="checkbox" :class="day" :id="day" :value="day">{{day}}
            </label>
            </div>
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
import Button from "../Button.vue";
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
      vacancy: "" as string,
      //schedules: [] as Array<string>,
      skills: [] as Array<string>,
    });

    const days: string[] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domigo"];  

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
      //Se hacen las validaciones respectivas y se crea la oferta
      console.log("Created");
    }


    return {
      state,
      jobOffer,
      showModal,
      closeModal,
      createOffer,
      days
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

input{
  font-family: 'Poppins';
  margin: 10px;
  display: inline-block;
  border-radius: 10px;
  border-color: rgb(196, 196, 196);
  padding: 5px;
  //width: 30%;
  background: rgba(197, 197, 197, 0.349);
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

</style>
