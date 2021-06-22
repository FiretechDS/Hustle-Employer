<template>
 <div class="container">
   Hello
 </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "App",
  components: {
    
  },
});
</script>

<style lang="scss">
.container{
 background-color: $background-color;
 color: $white;
 min-height: 100vh;
 font-size: $normal-font;
}
</style>
