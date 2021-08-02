<template>
  <JobsMain/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobsMain from "../components/jobs/JobsMain.vue";
export default defineComponent({
  name: "JobsPage",
  components: { JobsMain },
});
</script>

<style lang="scss" scoped>
</style>
