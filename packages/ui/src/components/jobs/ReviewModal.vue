<template>
  <Modal @close="close()" class="review-modal">
      <template v-slot:header> Write a review! </template>
      <template v-slot:body>
        <div class="review-body-div">
          <form class="review-form">
              <textarea
              class="review-input"
              v-model="reviewForm.review"
              placeholder="Description"
            />
          </form>
            <vue3starRatings 
                v-model="reviewForm.rating"
                starSize="20"
                controlSize="20"
                disableClick="true"
            />
        </div>
      </template>
      <template v-slot:footer>
        <div class="review-footer">
          <Button
            buttonText="Publish"
            iconName="check.svg"
            :isPrimary="true"
            @click="publishReview()"
            id="create-button"
          />
          <Button
            buttonText="Cancel"
            iconName="cancel.svg"
            :isPrimary="false"
            @click="close()"
          />
        </div>
      </template>
    </Modal>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Modal from "../Modal.vue";
import Button from "../Button.vue";
import vue3starRatings from "vue3-star-ratings";
export default defineComponent({
  name: "ReviewModal",
  components: { Modal, Button, vue3starRatings },
  props: {

  },
  setup(props, ctx) {
    const state = reactive({
      isModalVisible: false as boolean,
    });

    const reviewForm = reactive({
      review: "" as string,
      rating: "" as string,
    });

    function showModal(): void {
      state.isModalVisible = true;
    }
    function closeModal(): void {
      state.isModalVisible = false;
    }
    function publishReview(){
      ctx.emit("publish", reviewForm);
    }
    function close() {
      reviewForm.review = "";
      reviewForm.rating = "";
      ctx.emit("close");
    }
    return {
      close,
      state,
      reviewForm,
      showModal,
      closeModal,
      publishReview,
    };
  },
});
</script>

<style lang="scss" scoped>
.review-body-div {
  height: fit-content;
  width: fit-content;
}
div {
  color: grey;
  padding: 10px;
  text-align: top left;
  display: inline;
}
.review-form {
  margin: 0rem 1rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  .subtitle {
    width: 100%;
  }
}

input {
  font-family: "Poppins";
  margin: 10px;
  display: inline-block;
  border-radius: 10px;
  border-color: transparent;
  padding: 5px;
  width: 20rem;
  height: 8rem;
  color: $font-gray;
  background: $lighter-gray;
}

textarea {
  resize: none;
  font-family: "Poppins";
  margin: 10px;
  display: inline-block;
  border-radius: 10px;
  border-color: rgb(196, 196, 196);
  padding: 5px;
  width: 90%;
  background: $lighter-gray;
  border-width: 2px;
  border-style: inset;
}

.review-input {
  width: 40rem;
  height: 10rem;
  border: none;
  border-radius: 10px;
}
.rating-div {
  width: 50%;
}

.form-result {
  text-align: center;
  color: $highlit-darkblue;
}
.vue3-star-ratings__wrapper{
    padding: 0;
    margin: 0 10rem;
    margin-top: 2rem;
}
.review-footer {
  display: flex;
  width: 26rem;
  margin-left: auto;
  justify-content: space-between;
}
</style>