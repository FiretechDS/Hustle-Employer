<template>
  <div class="small-card" @click="onClick()">
      <div class="small-card-body">      
          <div class="icon-container">
              <div class="icon"> {{firstName[0]}}{{lastName[0]}} </div>
          </div>
          <section class="small-card-info">
              <p class="name">{{firstName}} {{lastName}}</p>
              <p class="view-info" @click="onClick()">View Profile</p>
          </section>
      </div>
      <footer class="small-card-footer">
          <p>{{getTimeAgo(date)}}.</p>
      </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";

export default defineComponent({
  name: "SmallCard",
  props: {
    onClick: {
      type: Function as PropType<() => void>,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  setup(){
      function getTimeAgo(date:string): string{
          const timeAgo = new Date(date)
          const today = new Date()
          const diff = Math.trunc((today.getTime()-timeAgo.getTime())/86400000)
          const response = ''
          if(diff==0) return 'today'
          if(diff==1) return '1 day ago'
          return String(diff)+' days ago'
      }
      return{getTimeAgo}
  }
});
</script>

<style lang="scss" scoped>
p{
    margin: 0 0.5rem;
    display: inline-block;
    width: 100%;
}
.small-card {
  background: white;
  width: 30rem;//25vw;
  height: 10rem;
  margin: 1rem 0;
  margin-right: 1rem;
  border-radius: 8px;
  cursor: pointer;
}
.icon {
  background: #FFEDA3;
  color: #29293A;
  border-radius: 100%;
  margin: 1rem;
  display: flex;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  align-items: center;
  margin-right: 0rem;
  font-weight: bold;
  font-size: 2rem;
}
.small-card-body{
  display: flex;
}
.small-card-info {
  margin: 1rem;
}
.name{
    color: $font-dark;
    display: inline-block;
    font-weight: bolder;
    font-size: 1.8rem;
}
.view-info{
    color: #39A9CB;
    display: flex;
    font-weight: bold;
    //cursor: pointer;
}
.small-card-footer{
    filter: $filter-gray;
    margin-left: 1rem ;
    display: flex;
}
</style>