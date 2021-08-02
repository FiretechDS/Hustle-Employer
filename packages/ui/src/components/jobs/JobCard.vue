<template>
  <div class="job-card">
      <div class="job-card-body">      
          <div class="icon-container">
              <div class="icon"> {{firstName[0]}}{{lastName[0]}} </div>
              <p class="job-status" v-if="jobStatus==='3'">{{getTimeAgo(startDate)}}</p>
              <p class="job-status warned" v-if="jobStatus==='4'">{{getTimeUntil(endDate)}}</p>
              <p class="job-status" v-if="(jobStatus==='5'||jobStatus==='6')&&review===''" v>no review</p>
              <p class="job-status" v-if="(jobStatus==='5'||jobStatus==='6')&&review!==''" v>reviewed</p>
          </div>
          <section class="job-card-info">
              <p class="title">{{jobTitle}}</p>
              <div class="worker">
                <p class="assigned-to">Assigned to:</p>
                <p class="assigned-to">{{firstName}} {{lastName}}</p>
              </div>
          </section>
      </div>
      <footer class="job-card-footer">
          <button type="button" class="more-info-button" @click="showInfo()">More Info</button>
          <img
            v-if="jobStatus==='3'||jobStatus==='4'"
            class="card-icon-button red-icon"
            :src="require('@/assets/svg/cancel.svg')"
            @click="cancelJob()"
          />
          <img
            v-if="jobStatus==='3'||jobStatus==='4'"
            class="card-icon-button"
            :src="require('@/assets/svg/right-arrow.svg')"
            @click="finishJob()"
          />
          <div class="stars-rating" v-if="(jobStatus==='5'||jobStatus==='6')&&rating!==''">{{rating}} stars</div>
          <div class="stars-rating" v-if="(jobStatus==='5'||jobStatus==='6')&&rating===''">Not rated</div>
      </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";

export default defineComponent({
  name: "JobCard",
  props: {
    showInfo: {
      type: Function as PropType<() => void>,
    },
    cancelJob: {
      type: Function as PropType<() => void>,
    },
    finishJob: {
      type: Function as PropType<() => void>,
    },
    jobTitle: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    jobStatus: {
      type: String,
    },
    review:{
      type: String,
    },
    rating:{
      type: String,
    }
  },
  setup(){
      function getTimeAgo(date:string): string{
          const timeAgo = new Date(date)
          const today = new Date()
          const diff = Math.trunc((today.getTime()-timeAgo.getTime())/86400000)
          if(diff==0) return 'today'
          if(diff==1) return '1 day ago'
          return String(diff)+' days ago'
      }
      function getTimeUntil(date:string): string{
          const timeUntil = new Date(date)
          const today = new Date()
          const diff = Math.trunc((timeUntil.getTime()-today.getTime())/86400000)
          if(diff==0) return 'for today'
          if(diff==1) return '1 day left'
          return String(diff)+' days left'
      }
      return{getTimeAgo, getTimeUntil}
  }
});
</script>

<style lang="scss" scoped>
p{
    margin: 0 0.5rem;
    display: inline-block;
    width: 100%;
}
.job-card {
  background: white;
  margin: 1rem 0;
  border-radius: 8px;
  //cursor: pointer;
  width: 26rem;
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
  margin-bottom: 0;
}
.job-status{
  color: $font-gray;
  font-size: 1rem;
  text-align: -webkit-center;
  font-weight: bold;
  margin-left: 1rem;
}
.warned{
  color: #D66E41;
}
.job-card-body{
  display: flex;
}
.job-card-info {
  margin: 1rem;
  margin-top: 2rem;
  white-space: nowrap;
  width: -webkit-fill-available;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title{
    color: $font-dark;
    display: inline-block;
    font-weight: bolder;
    font-size: 1.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.worker{
  margin-right: 2rem;
}
.assigned-to{
    color: $font-gray;
    display: flex;
    font-weight: bold;
    font-size: 1rem;
    margin-right: 2rem;
    justify-content: flex-end;
}
.job-card-footer{
    align-items: center;
    display: flex;
    padding: 1rem;
    padding-top: 0;
    justify-content: space-around;
    .more-info-button{
      color: $highlit-blue;
      font-weight: bold;
      cursor: pointer;
      outline: none;
      border: 1.5px solid $highlit-blue;
      border-radius: 5px;
      padding: 0.4rem 0rem;
      width: 12rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      transition: all 0.2s ease-in-out;
      text-align: center;
      font-family: "Poppins";
      &:hover {
        transform: scale(1.1);
      }
      &:disabled {
        opacity: 0.7;
      }
    }
    .card-icon-button{
      height: 2.5rem;
      filter: $filter-blue;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
      &:disabled {
        opacity: 0.7;
      }
    }
    .red-icon{
      filter: $filter-red;
    }
    .stars-rating{
      color: grey;
      font-style: italic;
    }
}
</style>