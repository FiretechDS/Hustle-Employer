<template>
  <div class="container">
    <NavBar/> 
    <router-view />
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { dependenciesLocator } from "../../core/src/common/dependencies";
import NavBar from './components/nav-bar/NavBar.vue'

export default defineComponent({
  name: "App",
  components: {NavBar},
  provide:{
    jobOfferPloc:dependenciesLocator.provideJobOfferPloc()
  }
});
</script>

<style lang="scss">
.container {
  background-color: $background-color;
  color: $white;
  min-height: 100vh;
  font-size: $normal-font;
}
</style>
