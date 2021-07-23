<template>
  <div>
    <div class="white-card" :style="{ width: width }">
      <header class="white-card-header">
        <slot name="header"> This is the default title! </slot>
      </header>

      <section class="white-card-body">
        <slot name="body"> This is the default body! </slot>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "WhiteVerticalCard",
  props: {
    width: {
      type: String as PropType<string>,
      default: "50rem",
    },
  },
});
</script>

<style lang="scss" scoped>
.white-card {
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  align-content: space-around;
  margin: auto;
  margin-top: 18rem;
  max-width: 50rem;
  max-height: 80rem;
}
.white-card-header {
  color: $font-dark;
  font-size: $large-font;
  text-align: center;
  margin-top: 3.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.white-card-body {
  color: $font-dark;
  font-size: $normal-font;
  text-align: center;
  padding: 1rem;
}
</style>