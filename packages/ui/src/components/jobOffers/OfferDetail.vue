<template>
  <div>
    <HorizontalCard :title="title" :salary="salary" :location="location" :duration="duration" :last="last" :onClick="showModal" />
    <Modal v-show="state.isModalVisible" @close="closeModal()">
      <template v-slot:header> {{this.title}} </template>
      <template v-slot:body>
        
          <p class="fields-modal-offer value-modal-offer">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorum numquam, vitae consectetur animi nobis pariatur, 
            sequi assumenda cupiditate doloremque atque earum expedita, dolor rerum ipsam modi enim sed voluptas nesciunt?</p>

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
            <p class="value-modal-offer">{{last}}</p>
          </li>
        </ul>
        </div>

        <div class="fields-modal-offer">
          <p class="title-modal-offer">Horario</p>
          <ul class="list-modal-offer">
            <li v-for="days in schedule" :key="days.id">
              <div class="value-modal-offer">
                <p>
                {{days.day}}    {{days.hourIn}} a {{days.hourOut}}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="fields-modal-offer">
          <p class="title-modal-offer">Habilidades</p>
          <ul class="list-modal-offer">
            <li v-for="skill in skills" :key="skill.id">
              <div class="value-modal-offer">
                <p>
                {{skill.description}}
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
       location:{
         type: String
       },
       duration: {
         type: String
       },
       last:{
         type: String
       },
       schedule:{
         type: Array as PropType<{id: number, day: string, hourIn: string, hourOut: string}[]>
       },
       skills:{
         type: Array as PropType<{id: number, description: string}[]>
       },
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
