<template>
  <div class="job-card" @click="onClick()">
    <ul class="columns-job-offer">
      <li>
        <p class="in-card-text-job-offer">{{ title }}</p>
      </li>
      <li class="small-columns-job-offer">
        <p class="in-card-text-job-offer">{{ salary }}</p>
      </li>
      <li class="small-columns-job-offer">
        <p class="in-card-text-job-offer">{{ duration }}</p>
      </li>
      <li class="small-columns-job-offer">
        <p class="in-card-text-job-offer">{{ deadline }}</p>
      </li>
      <li class="small-columns-job-offer">
        <p class="in-card-text-job-offer">{{ status }}</p>
      </li>
      <div class="buttons">
        <slot name="buttons"> Buttons go here! </slot>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "HorizontalCard",
  props: {
    onClick: {
      type: Function as PropType<() => void>,
    },
    title: {
      type: String,
    },
    salary: {
      type: Number,
    },
    status: {
      type: String,
    },
    duration: {
      type: Number,
    },
    deadline: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.job-card {
  //animation:anim 1s ease-in-out;
  align-self: center;
  background: white;
  width: 80vw;
  padding: 0.1rem;
  height: 8rem;
  margin: 1rem 0;
  border-radius: 8px;
  cursor: pointer;
  z-index: -1; //check
  .columns-job-offer {
    width: 75vw;
  }
}
.buttons {
  width: 15vw;
  justify-self: flex-end;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.in-card-text-job-offer {
  color: $font-dark;
}
@keyframes anim {
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0.01;
  }
  100% {
    opacity: 1;
  }
}
@keyframes FadeIn {
  0% {
    opacity: 0;
    transform: scale(0.1);
  }

  85% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>