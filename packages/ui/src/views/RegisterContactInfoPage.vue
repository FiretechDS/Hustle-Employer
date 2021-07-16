<template>
  <RegisterContactInfo tittle="Hustle Employer"/>
</template>

<script lang="ts">
import { defineComponent} from "vue"
import RegisterContactInfo from '../components/employer/RegisterContactInfo.vue'

export default defineComponent({
  name: 'RegisterContactInfoPage',
  components: { RegisterContactInfo  },
  
});
</script>

<style lang="scss" scoped>

</style>
