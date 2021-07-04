<template>
  <JobOfferMain/>
</template>

<script lang="ts">
import { defineComponent} from "vue"
import JobOfferMain from '../components/jobOffers/JobOfferMain.vue'
export default defineComponent({
  components: { JobOfferMain  },
  name: 'JobOfferPage',
 
});
</script>

<style lang="scss" scoped>

</style>
