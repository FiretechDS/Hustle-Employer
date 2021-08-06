<template>
  <div class="jobPageCointainer">
    <div class="header">
      <div class="candidates-sorter">
        <p class="sorter-text">Show</p>
        <select class="sorter-select" v-model="sortType.value">
          <option value="mostRecent">Most Recent</option>
          <option value="oldest">Oldest</option>
          <option value="mostRated">Most Rated</option>
          <option value="nameAtoZ">By name (A-Z)</option>
          <option value="nameZtoA">By name (Z-A)</option>
        </select>
      </div>
    </div>
    <div class="job-cards">
        <div class="job-cards-column">
            <h2 class="column-title">Assigned Jobs</h2>
              <div class="job-card-container">
                <JobDetail
                  jobTitle="UI/UX Developer"
                  firstName="Lucas"
                  lastName="Colmenares"
                  birthDate="1995-10-11"
                  phoneNumber="+58 4161456851"
                  startDate="2021-07-13"
                  jobStatus="3"
                  jobStatusName="Assigned"
                  jobDuration="70"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, esse itaque unde nam ipsum doloremque officiis. Voluptatum assumenda natus porro officia illum ducimus earum perferendis, facilis provident eum sint qui."
                  educationLevel="Bachelor Degree"
                  cityAddress="Orlando"
                  stateAddress="Florida"
                />
              </div>
        </div>
        <div class="job-cards-column">
            <h2 class="column-title">In Progress</h2>
              <div class="job-card-container">
                <JobDetail
                    jobTitle="UI/UX Developer"            
                    firstName="Marcos"
                    lastName="Colmenares"
                    birthDate="1995-10-11"
                    phoneNumber="+58 4161456851"
                    startDate="2021-07-13"
                    endDate="2021-08-20"
                    jobStatusName="In Progress"
                    jobDuration="70"
                    jobStatus="4"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, esse itaque unde nam ipsum doloremque officiis. Voluptatum assumenda natus porro officia illum ducimus earum perferendis, facilis provident eum sint qui."
                    educationLevel="Bachelor Degree"
                    cityAddress="Orlando"
                    stateAddress="Florida"
                    review=""
                />
              </div>
        </div>
        <div class="job-cards-column">
            <h2 class="column-title">Finished</h2>
            <div class="job-card-container">
            <JobDetail
                jobTitle="Developer and debugger"
                firstName="José"
                lastName="Pérez"
                birthDate="1995-10-11"
                phoneNumber="+58 4161456851"
                startDate="2021-07-13"
                jobStatus="5"
                jobStatusName="Finished"
                jobDuration="70"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, esse itaque unde nam ipsum doloremque officiis. Voluptatum assumenda natus porro officia illum ducimus earum perferendis, facilis provident eum sint qui."
                educationLevel="Bachelor Degree"
                cityAddress="Orlando"
                stateAddress="Florida"
                review=""
                rating=""
            />
            </div>
            <div class="job-card-container">
            <JobDetail
                jobTitle="New Offer"
                firstName="Michael"
                lastName="Torres"
                birthDate="1995-10-11"
                phoneNumber="+58 4161456851"
                startDate="2021-07-13"
                jobStatus="5"
                jobStatusName="Finished"
                jobDuration="70"
                review="Muy bueno"
                rating="5"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, esse itaque unde nam ipsum doloremque officiis. Voluptatum assumenda natus porro officia illum ducimus earum perferendis, facilis provident eum sint qui."
                educationLevel="Bachelor Degree"
                cityAddress="Orlando"
                stateAddress="Florida"
            />
            </div>
        </div>
        <div class="job-cards-column">
            <h2 class="column-title">Cancelled</h2>
            <div class="job-card-container">
            <JobDetail
                jobTitle="Frontend Developer"
                firstName="Miguel"
                lastName="Rodríguez"
                birthDate="1995-10-11"
                phoneNumber="+58 4161456851"
                date="2021-07-13"
                jobStatus="6"
                jobStatusName="Cancelled"
                jobDuration="70"
                review="Regular"
                rating="3"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, esse itaque unde nam ipsum doloremque officiis. Voluptatum assumenda natus porro officia illum ducimus earum perferendis, facilis provident eum sint qui."
                educationLevel="Bachelor Degree"
                cityAddress="Orlando"
                stateAddress="Florida"
            />
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType, reactive } from "vue";
import JobDetail from "./JobDetail.vue";
export default defineComponent({
  name: "JobsMain",
  components: {JobDetail},
  setup(){
      const sortType = reactive({value: "mostRecent" as String})
      return {sortType}
  }
});
</script>

<style lang="scss" scoped>
.jobPageCointainer {
  color: $white;
  margin: 5rem 10rem;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    margin: 2rem 15rem; //10rem;;
  }
  .candidates-sorter {
    background: white;
    color: #000;
    display: flex;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    align-items: center;
    height: fit-content;
    align-self: center;
    margin-left: auto;
  }
  .sorter-text {
    margin: 0;
    margin-right: 1rem;
  }
  .sorter-select {
    height: 3rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    border: 0;
    outline: 0;
  }
  .job-cards{
      margin-top: rem;
      display: flex;
      .job-cards-column{
          width: -webkit-fill-available;
      }
      .column-title{
          text-align: center;
      }
  }
  .job-card-container{
    margin-left: 2rem;
    display: flex;
    justify-content: center;
  }
}
</style>