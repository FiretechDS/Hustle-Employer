<template>
  <div>
    <HorizontalCard :title="title" :salary="salary" :status="status" :duration="duration" :deadline="deadline" :onClick="showModal" />
    <Modal v-show="state.isModalVisible" @close="closeModal()">
      <template v-slot:header> {{this.title}}</template>
      <template v-slot:body>
        
          <p class="fields-modal-offer value-modal-offer">{{description}}</p>

        <div class="fields-modal-offer">
        <ul class="columns-modal-offer-detail">
          <li>
            <p class="title-modal-offer">Pago/hora</p>
          </li>
          <li class="small-columns-modal-offer-detail"> 
            <p class="title-modal-offer">Horas</p>
          </li> 
          <li class="small-columns-modal-offer-detail"> 
            <p class="title-modal-offer">Vencimiento</p>
          </li>
        </ul>
        <ul class="columns-modal-offer-detail">
          <li>
            <p class="value-modal-offer">{{salary}}</p>
          </li>
          <li class="small-columns-modal-offer-detail"> 
            <p class="value-modal-offer">{{duration}}</p>
          </li> 
          <li class="small-columns-modal-offer-detail"> 
            <p class="value-modal-offer">{{deadline}}</p>
          </li>
        </ul>
        </div>

        <div class="fields-modal-offer">
          <p class="title-modal-offer">Horario</p>
          <ul class="list-modal-offer">
            <li v-for="day in schedule.days" :key="schedule.days.indexOf(day)">
              <div class="value-modal-offer"> 
                <p>
                {{day}} {{schedule.hourIn}}:00 -{{schedule.hourOut}}:00 
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="fields-modal-offer">
          <p class="title-modal-offer">Habilidades</p>
          <ul class="list-modal-offer">
            <li v-for="skill in skills" :key="skill.name">
              <div class="value-modal-offer">
                <p>
                {{skill.name}} {{skill.category}}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from "vue";
import HorizontalCard from "@/components/HorizontalCard.vue";
import Modal from "../Modal.vue";


export default defineComponent({
  name: "OfferDetail",
  props:{  
       title: {
         type: String
       },
       salary: {
         type: Number
       },
       description:{
         type: String
       },
       duration: {
         type: String
       },
       deadline:{
         type: String
       },
       schedule:{
         type: Object as PropType<{id: number, days: string[], hourIn: string, hourOut: string}>
       },
       skills:{
         type: Array as PropType<{name: string, category: string}[]>
       },
       status:{
         type: String
       },
       job:{
         type: Object
       }
    },
  components: { Modal, HorizontalCard },
  created(){
    console.log(this.state)
  },
  setup() {
    const state = reactive({
      isModalVisible: false as boolean,
    });
    function showModal(): void {
      state.isModalVisible = true;
      console.log("open");
    }
    function closeModal(): void {
      state.isModalVisible = false;
      console.log("closed");
    }
    return {
      state,
      showModal,
      closeModal,
    };
  },
});
</script>
