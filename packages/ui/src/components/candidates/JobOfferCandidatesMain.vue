<template>
  <div class="candidatePageCointainer">
    <div class="header">
      <h2 class="job-title">UI/UX Developer</h2>
      <p class="total-candidates">Total Candidates: 5</p>
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
    <div class="candidate-cards">
      <!--una vez se tenga el Ploc de candidatos se puede hacer el v-for-->
      <CandidateDetail
        :firstName="data.firstName"
        :middleName="data.middleName"
        :lastName="data.lastName"
        :dateApplied="data.dateApplied"
        :phoneNumber="data.phoneNumber"
        :educationLevel="data.educationLevel"
        :birthDate="data.birthDate"
        :streetAddress="data.streetAddress"
        :cityAddress="data.cityAddress"
        :stateAddress="data.stateAddress"
        :certificates="data.certificates"
        :skills="data.skills"
        :workExperience="data.workExperience"
        :references="data.references"
      />
      <!--more examples-->
      <CandidateDetail
        firstName="Sebastian"
        middleName="Alejandro"
        lastName="González"
        dateApplied="2021-07-13"
      />
      <CandidateDetail
        firstName="David"
        lastName="Ortuño"
        dateApplied="2021-07-17"
      />
      <CandidateDetail
        firstName="Lionel"
        lastName="Messi"
        dateApplied="2021-07-18"
      />
      <CandidateDetail
        firstName="Cristiano"
        lastName="Ronaldo"
        dateApplied="2021-07-19"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType, reactive } from "vue";
import CandidateDetail from "./CandidateDetail.vue";
export default defineComponent({
  components: { CandidateDetail },
  name: "JobOfferCandidatesMain",
  setup() {
    const sortType = reactive({ value: "mostRecent" as String });
    const data = {
      firstName: "Luis",
      middleName: "Alejandro",
      lastName: "Castillo",
      dateApplied: "2021-07-11",
      phoneNumber: "+58 424 1513995",
      educationLevel: "Bachelors degree",
      birthDate: "25 may 1995",
      streetAddress: "25th street, Alabama Park, Terracota",
      cityAddress: "San Francisco",
      stateAddress: "Washington, DC.",
      certificates: [
        { name: "Certificado en DDD" },
        { name: "Certificado en SCRUM" },
      ],
      workExperience: [
        { name: "Desarrollador de Backend" },
        { name: "Diseñador de Interfaces" },
      ],
      skills: [
        { name: "Experiencia diseñando en Figma" },
        { name: "Sabe desarrollar en TypeScript" },
        { name: "Sabe trabajar en equipo" },
      ],
      references: [{ name: "Steve Jobs" }],
    };
    return { sortType, data };
  },
});
</script>

<style lang="scss" scoped>
.candidatePageCointainer {
  color: $white;
  margin: 5rem 10rem;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    margin: 0 15rem; //10rem;;
  }
  .job-title {
    font-size: $medium-font;
    width: fit-content;
  }
  .total-candidates {
    background: white;
    border-radius: 8px;
    text-align: center;
    color: black;
    align-self: center;
    padding: 1rem;
    margin: auto;
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
  .error {
    text-align: center;
    margin-top: 12vh;
    color: $highlit-yellow;
    img {
      width: 25rem;
      height: 25rem;
      filter: $filter-blue;
    }
  }
  .empty {
    text-align: center;
    margin-top: 20vh;
    color: $white;
  }
  .loading {
    text-align: center;
    margin-top: 25vh;
    color: $white;
    margin-left: auto;
    margin-right: auto;
  }
  .candidate-cards {
    //text-align: center;
    //margin: 0 8vw;
    margin: 0; //0 0 10rem;
  }
  .small-card {
    display: inline-block;
    margin: 1.5rem 1rem;
    text-align: initial;
  }
}
</style>
