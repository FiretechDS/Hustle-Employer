<template>
    <ProfileMain/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileMain from "../components/profile/ProfileMain.vue"
export default defineComponent({
  components: { ProfileMain },
  name: "ProfilePage",
});
</script>

<style lang="scss" scoped>
</style>