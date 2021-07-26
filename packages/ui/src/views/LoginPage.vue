<template>
  <div class="container">
    <LoginMain tittle="Hustle Employer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginMain from "../components/employer/LoginMain.vue";

export default defineComponent({
  name: "LoginMainPage",
  components: { LoginMain },
});
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  height: 60%;
  width: 100%;
  background: linear-gradient(
      115.8deg,
      rgba(57, 169, 203, 0.8) 2.27%,
      rgba(53, 112, 138, 0.8) 18.55%,
      rgba(48, 53, 71, 0.8) 92.22%
    ),
    url("../../public/img/blue-buildings.jpg");
  // filter: blur(1px);
  background-blend-mode: darken;
}
</style>
