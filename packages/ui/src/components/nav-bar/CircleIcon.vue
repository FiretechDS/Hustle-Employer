<template>
  <div class="icon" :style="[{ 'background-color': color }, styles]">
    <img :src="require(`@/assets/svg/${iconName}`)" alt="" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String,
      default: "#FFEDA3",
    },
    iconName: {
      type: String,
      required: true,
    },
    styles: {
      type: Object,
    },
  },
});
</script>
<style lang="scss" scoped>
.icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 2rem;
    height: 2rem;
    filter: $filter-mustard;
  }
}
</style>