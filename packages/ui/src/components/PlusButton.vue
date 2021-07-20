<template>
  <div class="plusButton">
    <img class="button" src="@/assets/svg/plus.svg" @click="onClick()" id="create-new-offer-button"/>
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
}
</style>