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
            <p class="subtitle">Trabajo:</p> 
            <input v-model="jobOffer.title" placeholder="Título">
            <input v-model="jobOffer.location" placeholder="Localización"/>
            <input type="number" v-model="stringHelper.hourlyRate" placeholder="Salario/Hora ($)">
            <p class="subtitle">Horario de Trabajo:</p> 
           <div class="schedule-options">
              <Multiselect 
                :options="jobOffer.schedules.options" v-bind="jobOffer.schedules"
                v-model="jobOffer.schedules.value" placeholder="Horario" 
                mode="multiple" class="schedule-multiselect"
              />
              <Multiselect 
                :options="getHourOptions()" 
                v-model="jobOffer.startHour" placeholder="Hora inicio" 
                class="hour-multiselect"
              />
              <Multiselect 
                :options="getHourOptions()" 
                v-model="jobOffer.endHour" placeholder="Hora fin" 
                class="hour-multiselect"
              />
            </div> 
            <p class="subtitle">Fecha tope:</p> 
            <input type="date" v-model="jobOffer.deadline" placeholder="Fecha tope (DD/MM/YYYY)">
            <input type="number" v-model="stringHelper.duration" placeholder="Duración (horas)">
              <Multiselect 
                :options="jobOffer.skills.options" v-bind="jobOffer.skills"
                v-model="jobOffer.skills.value" placeholder="Habilidades" 
                mode="multiple" class="skills-multiselect"
              />
             <p class="subtitle">Requerimientos adicionales:</p> 
            <textarea class="description-input" v-model="jobOffer.specialRequirements" placeholder="Descripción"/>
            <p class="form-result">{{message}}</p>
          </form>
        </div>
      </template>
      <template v-slot:footer>
        <div class="create-job-offer-footer">
          <Button buttonText="Crear" iconName="paper-plane.svg" :isPrimary="true" @click="sendOffer"/> 
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import PlusButton from "../PlusButton.vue";
import Modal from "../Modal.vue";
import Button from "../Button.vue";
import Multiselect from '@vueform/multiselect';
import {skills} from "./skills";
export default defineComponent({
  name: "CreateOfferModal",
  components: { Modal, PlusButton, Button,Multiselect },
  props:{
    message:{
      type:String,
      default:''
    }
  },
  setup(props,ctx) {
    const state = reactive({
      isModalVisible: false as boolean,
    });
    const jobOffer = reactive({
      title: "" as string,
      specialRequirements: "" as string,
      location: "" as string,
      deadline: "" as string,
      duration:0 as number,
      hourlyRate:0 as number, 
      schedules: { 
        value:[] as Array<string> ,
        options:['monday','tuesday','wednesday','thursday','friday','saturday'] },
      startHour: 0 as number,
      endHour: 0 as number,
      skills:{
         value:[] as Array<number>,
         options:skills.map(skill=>{
           return {value:skill.id, label:skill.habilityName}
         }) 
      },
      status:1,
    });
    const stringHelper = reactive({
      duration: "" as string,
      hourlyRate: "" as string,
    })
  
    function showModal(): void {
      state.isModalVisible = true;
      console.log("open");
    }
    function closeModal(): void {
      state.isModalVisible = false;
      console.log("closed");
      setValuesToDefault()
    }

    function getHourOptions():Object[]{
      let i=5;
      const options = [];
      while(i<=23){ 
        options.push({value:i,label:`${i}:00`});
        i++;
      }
      return options;
    }

    function setValuesToDefault(): void{
      jobOffer.title = "";
      jobOffer.specialRequirements = "";
      jobOffer.status = 1;
      jobOffer.location = "";
      jobOffer.deadline = "";
      jobOffer.duration = 0;
      jobOffer.hourlyRate = 0;
      jobOffer.schedules.value = [];
      jobOffer.startHour = 0;
      jobOffer.endHour = 0;
      jobOffer.skills.value = [];

      stringHelper.duration = "";
      stringHelper.hourlyRate = "";
    }

    async function sendOffer() {
      jobOffer.hourlyRate = Number(stringHelper.hourlyRate)
      jobOffer.duration = Number(stringHelper.duration)
      console.log(jobOffer)
      const newOffer = {...jobOffer, employerId:1, status:'Posted',
        schedules:jobOffer.schedules.value,
        skills:jobOffer.skills.value.map((skill:number)=>{
          return {name:jobOffer.skills.options[skill].label,number:skill, category:1,}
          }
      )}
      ctx.emit("createOffer",newOffer)
      /*const result = await props.ploc.createOffer(
        {...jobOffer, employerId:1, status:'Posted',
        schedules:jobOffer.schedules.value,
        skills:jobOffer.skills.value.map((skill:number)=>{
          return {name:'any',number:skill, category:1,}
          }
        )
      })*/
    }
 

    return {
      state,
      jobOffer,
      stringHelper,
      showModal,
      closeModal,
      sendOffer,
      getHourOptions,
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
  margin: 0rem 2rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  .subtitle{
    width: 100%;
  }
}

input{
  font-family: 'Poppins';
  margin: 10px;
  display: inline-block;
  border-radius: 10px;
  border-color: transparent;
  padding: 5px;
  width: 25%;
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
  width: 100%;
  height:6rem;
  border:none;
  border-radius: 10px;
}
.schedule-options{
  display:flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .hour-multiselect{
    width:10rem;
  }
  .schedule-multiselect{
    margin-right: 0;
    width: 12rem;
}

}

.schedule-input{
  padding: 0;
  margin: 30px;
  margin-left: 0px;
}

.form-result{
  text-align: center;
  color:$highlit-darkblue;
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
