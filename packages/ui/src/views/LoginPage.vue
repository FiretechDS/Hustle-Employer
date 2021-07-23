<template>
  <LoginMain tittle="Hustle Employer"/>
</template>

<script lang="ts">
import { defineComponent} from "vue"
import LoginMain from '../components/employer/LoginMain.vue'

export default defineComponent({
  name: 'LoginMainPage',
  components: { LoginMain  },
  
});
</script>

<style lang="scss" scoped>

</style>
