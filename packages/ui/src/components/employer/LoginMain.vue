<template>
<div>
  <WhiteVerticalCard>
      <template v-slot:header>Hustle Employer</template>
      <template v-slot:body>
        <div>
          
        </div>
      </template>
  </WhiteVerticalCard>
</div>
</template>

<script lang="ts">

import { defineComponent, reactive } from 'vue';
import WhiteVerticalCard from '../WhiteVerticalCard.vue'

export default defineComponent({
    setup() {
      const loginData = reactive ({
        username: "" as string,
        password: "" as string
      })
    },
    components: { WhiteVerticalCard },
    name: 'LoginMain'
});
</script>

<style lang="scss" scoped>

</style>
