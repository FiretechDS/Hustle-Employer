<template>
  <JobOfferCandidatesMain />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobOfferCandidatesMain from "../components/candidates/JobOfferCandidatesMain.vue";
export default defineComponent({
  components: { JobOfferCandidatesMain },
  name: "CandidatesPage",
});
</script>

<style lang="scss" scoped>
</style>