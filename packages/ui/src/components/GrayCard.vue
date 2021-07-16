<template>
    <div class="register-contact-card" @click="onClick()">
    <slot name="body">
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import Button from "./Button.vue"

export default defineComponent({
    setup() {
        
    },
    name: 'GrayCard',
})
</script>

<style lang="scss" scoped>
.register-contact-card {
  //animation:anim 1s ease-in-out;
  align-self: center;
  background: $font-gray;
  width: 40rem;
  padding: 0.1rem;
  height: 3rem;
  margin: 1rem 0;
  border-radius: 8px;
  cursor: pointer;
  z-index: -1; //check
}
</style>
