<template>
  <div>
    <HorizontalCard :title="title" :salary="salary" :location="location" :duration="duration" :last="last" :onClick="showModal" />
    <Modal v-show="state.isModalVisible" @close="closeModal()">
      <template v-slot:header> {{this.title}} </template>
      <template v-slot:body>
        <h5>Aloha</h5>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
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


