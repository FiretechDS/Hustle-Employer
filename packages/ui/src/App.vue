<template>
  <div class="main">
    <NavBar/> 
    <div class="container">

      Hello

    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from './components/nav-bar/NavBar.vue'

export default defineComponent({
  name: "App",
  components: {
    NavBar
  },
});
</script>

<style lang="scss" >
html, body {
  margin: 0px !important;
  padding: 0px !important;
  font-family: 'Poppins', sans-serif;
}
.main{
  width: 100%;
}
.container{
 background-color: $background-color;
 margin:0;
 min-height: 80vh;
 font-size: $normal-font;
 color: $white;
}
</style>
