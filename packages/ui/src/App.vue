<template>
  <div class="container">
    <NavBar/> 
    <router-view />
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from './components/nav-bar/NavBar.vue'

export default defineComponent({
  name: "App",
  components: {NavBar},
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
