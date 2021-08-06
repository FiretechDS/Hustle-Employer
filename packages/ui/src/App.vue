<template>
  <div class="container">
    <NavBar />
    <router-view />
    <ConfirmDialog></ConfirmDialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  dependenciesLocator,
  profileLocator,
  registerLocator,
  skillLocator,
} from "../../core/src/common/dependencies";
import NavBar from "./components/nav-bar/NavBar.vue";
import ConfirmDialog from "primevue/confirmdialog";

export default defineComponent({
  name: "App",
  components: { NavBar, ConfirmDialog },
  provide: {
    jobOfferPloc: dependenciesLocator.provideJobOfferPloc(),
    skillsPloc: skillLocator.provideSkillProp(),
    registerService: registerLocator.provideRegisterService(),
    profilePloc: profileLocator.provideEmployerPloc(),
  },
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
