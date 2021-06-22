<template>
  <div class="jobPageCointainer">
    <h2 class="title">Ofertas creadas</h2>
    <ul class="columns">
      <li>titulo</li>
      <li class="small-column">pago</li>
      <li class="small-column">vacantes</li>
      <li class="small-column">duración</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "JobOfferPage",
});
</script>

<style lang="scss" scoped>
.jobPageCointainer {
  color: $white;
  margin: 5rem 10rem;
  display: flex;
  flex-direction: column;
  .title {
    font-size: $medium-font;
  }

  .columns {
    display: flex;
    width: 60vw;
    justify-content: space-around;
    list-style-type: none;

    :first-child {
      justify-self: flex-start;
      flex: 1;
    }
    .small-column {
      flex: 0.5;
    }
  }
}
</style>