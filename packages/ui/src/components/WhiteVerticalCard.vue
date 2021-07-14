<template>
  <div>
    <div class="white-card">
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "WhiteVerticalCard"
});
</script>

<style lang="scss" scoped>
.white-card{
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 43rem;
  height: 46rem;
  align-content: space-around;
  //margin-left: 63rem;
  margin: auto;
  margin-top: 18rem;
}
.white-card-header{
  color: $font-dark;
  font-size: $large-font;
  text-align: center;
  padding: 3.5rem;
  margin-bottom: -1rem;
  font-weight: bold;
}
.white-card-body{
  color: $font-dark;
  font-size: $normal-font;
  text-align: center;
  padding: 1rem;
}

</style>