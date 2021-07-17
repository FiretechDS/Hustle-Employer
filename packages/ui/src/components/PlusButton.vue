<template>
  <div class="plusButton">
    <img class="button" src="@/assets/svg/plus.svg" @click="onClick()" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "PlusButton",
  props: {
    onClick: {
      type: Function as PropType<() => void>,
    },
  },
});
</script>

<style lang="scss" scoped>
.button {
  filter: $filter-blue;
  width: 6rem;
  height: 6rem;
  position: fixed;
  bottom: 50px;
  right: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>