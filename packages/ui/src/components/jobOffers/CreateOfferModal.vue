<template>
  <div>
    <PlusButton :onClick="showModal" />
    <Modal v-show="state.isModalVisible" @close="closeModal()">
      <template v-slot:header> Crear oferta </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import PlusButton from "@/components/PlusButton.vue";
import Modal from "../Modal.vue";
export default defineComponent({
  name: "CreateOfferModal",
  components: { Modal, PlusButton },
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
