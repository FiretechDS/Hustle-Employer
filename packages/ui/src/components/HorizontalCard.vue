<template>
    <div class="job-card" @click="onClick()">
        <ul class="columns-job-offer">
          <li>
            <p class="in-card-text-job-offer">{{title}}</p>
          </li>
          <li class="small-columns-job-offer"> 
            <p class="in-card-text-job-offer">{{salary}}</p>
          </li> 
          <li class="small-columns-job-offer"> 
            <p class="in-card-text-job-offer">{{location}}</p>
          </li> 
          <li class="small-columns-job-offer"> 
            <p class="in-card-text-job-offer">{{duration}}</p>
          </li> 
          <li class="small-columns-job-offer"> 
            <p class="in-card-text-job-offer">{{last}}</p>
          </li> 
          
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "HorizontalCard",
  props:{  
      onClick: {
        type: Function as PropType<() => void>,
      },  
       title: {
         type: String
       },
       salary: {
         type: Number
       },
       location:{
         type: String
       },
       duration: {
         type: String
       },
       last:{
         type: String
       }
    },
});
</script>

<style lang="scss" scoped>
.job-card {
    background: white;
    padding: 0.1rem;
    margin: 1rem 0;
    border-radius: 8px;
    cursor: pointer;

  }

.in-card-text-job-offer{
      color: $font-dark;  
}


</style>