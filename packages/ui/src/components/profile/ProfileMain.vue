<template>
    <div v-if="page === 1" class="profile-card-container">
      <ProfileCard>
        <template v-slot:header>My profile</template>
        <template v-slot:body>
          <div class="rows-profile">
            <img :src="info.logoURL" class="image-profile">
            <div class="company-name-profile">
              <p>{{info.companyName}}</p>
            </div>
            <img src="@/assets/svg/edit-pencil.svg" class="edit-profile">
          </div>
          <div class="rows-profile">
            <div class="row-item-profile ">
              <div class="fields-profile-info">
                <p class="big-title-profile">Basic Info</p>
                <ul class="columns-profile-info">
                  <li>
                    <p class="title-info">Email</p>
                  </li>
                  <li class="small-columns-profile-info">
                    <p class="title-info">Password</p>
                  </li>
                </ul>
                <ul class="columns-profile-info">
                  <li>
                    <p class="value-info">{{info.email}}</p>
                  </li>
                  <li class="small-columns-profile-info">
                    <p class="value-info">{{info.password}}</p>
                  </li>
                </ul>
                <p class="title-info">Required Skills</p>
                <perfect-scrollbar>
                  <ul class="columns-profile-info">
                    <li v-for="skill in info.skills" :key="skill.name">
                        <p class="value-info"> {{ skill.name }} </p>
                    </li>
                  </ul>
                </perfect-scrollbar>
              </div>
            </div>
            
            <div class="row-item-profile ">
              <div class="fields-profile-info">
              <p class="big-title-profile">Contacts</p>
                <ul class="contact-columns-profile-info">
                  <li>
                    <p class="title-info">Full name</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="title-info">Job title</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="title-info">Phone number</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="title-info">Email</p>
                  </li>
                </ul>
                <ul v-for="contact in info.contacts" :key="contact.name" class="contact-columns-profile-info">
                  <li>
                    <p class="value-info">{{contact.fullName}}</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="value-info">{{contact.jobTitle}}</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="value-info">{{contact.phoneNumber}}</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="value-info">{{contact.email}}</p>
                  </li>
                </ul>
                
              </div>
            </div>
            
          </div>
          <div class="rows-profile">
            <div class="row-item-profile ">
              <div class="fields-profile-info">
                <p class="big-title-profile">Address</p>
                <div class="address-profile"> 
                  <p class="title-info">First Line</p>
                  <p class="value-info">{{info.address.firstLine}}</p>
                  <p class="title-info">Second Line</p>
                  <p class="value-info">{{info.address.secondLine}}</p>

                  <ul class="columns-profile-info">
                  <li>
                    <p class="title-info">City</p>
                  </li>
                  <li class="small-columns-profile-info">
                    <p class="title-info">State</p>
                  </li>
                  <li class="small-columns-profile-info">
                    <p class="title-info">ZIP</p>
                  </li>
                </ul>
                <ul class="columns-profile-info">
                  <li>
                    <p class="value-info">{{info.address.city}}</p>
                  </li>
                  <li class="small-columns-profile-info">
                    <p class="value-info">{{info.address.state}}</p>
                  </li>
                  <li class="small-columns-profile-info">
                    <p class="value-info">{{info.address.zip}}</p>
                  </li>
                </ul>
                </div>
              </div>
            </div>
            <div class="row-item-profile ">
              <div class="fields-profile-info">
                <p class="big-title-profile">Activity</p>
                <ul class="contact-columns-profile-info">
                  <li>
                    <p class="title-info">Active Offers</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="title-info">Archieve Offer</p>
                  </li>
                </ul>
                <ul class="contact-columns-profile-info activity-container">
                  <li>
                    <p class="value-info">0</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="value-info">0</p>
                  </li>
                </ul>
                <ul class="contact-columns-profile-info">
                  <li>
                    <p class="title-info">Assigned Jobs</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="title-info">In Progress Jobs</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="title-info">Finished Jobs</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="title-info">Canceled Jobs</p>
                  </li>
                </ul>
                <ul class="contact-columns-profile-info activity-container ">
                  <li>
                    <p class="value-info">0</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="value-info">0</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="value-info">0</p>
                  </li>
                  <li class="small-columns-contact-profile-info">
                    <p class="value-info">0</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>
      </ProfileCard>
    </div>
    <div v-else>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import ProfileCard from "../ProfileCard.vue"

export default defineComponent({
  components: { ProfileCard },
  name: "ProfileMain",
  setup(){
    const info={
      companyName: 'Firetech',
      logoURL: 'https://i1.wp.com/i.imgflip.com/2ejoc0.jpg',
      email: 'staff@firetech.com',
      password: 'Firetech1234',
      skill:[
        {name:'Dart'},
        {name:'Vue'}
      ],
      contacts: [
        {
          fullName: 'David Ortuño',
          jobTitle: 'Developer',
          phoneNumber: '04126110189',
          email: 'daortuno@firetech.com'
        },
        {
          fullName: 'Luis Castillo',
          jobTitle: 'Full Stack',
          phoneNumber: '04121234567',
          email: 'lacastillo@firetech.com'
        }
      ],
      address: {
        firstLine: 'Av Teheran',
        secondLine: 'Montalban',
        city: 'Caracas',
        state: 'DF',
        zip: '1050'
      },
    };

    var isModalVisible = true;

    var page=ref(1);

    function setPage(actual: number): void {
      page.value = actual;
    }
    console.log(isModalVisible);
    return{
      page, 
      setPage, 
      info
    }
  },
});
</script>

<style lang="scss" scoped>
.profile-card-container{
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;
  font-family: 'Poppins', sans-serif;
}
.rows-profile{
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
}
.row-item-profile{
  display: flex;
  flex-direction: column;
  padding:0.5rem;
}
.skills-profile{
  text-align: initial;
}
.columns-profile-info {
  display: flex;
  width: 20vw;
  justify-content: space-around;
  align-items: stretch;
  list-style-type: none;
  margin-top: 0rem;
  margin-bottom: 0rem;
  padding-inline-start: 0rem;
  max-height: 30px;
  margin-block-start: 0px;
  text-align: initial;
  :first-child {
    justify-self: flex-start;
    flex: 0rem;
  }
  .small-columns-profile-info {
    flex: 1rem;
    margin-left: 0rem;
  }
}
.contact-columns-profile-info {
  display: flex;
  width: 35vw;
  justify-content: space-around;
  align-items: stretch;
  list-style-type: none;
  margin-top: 0rem;
  margin-bottom: 0rem;
  padding-inline-start: 0rem;
  max-height: 30px;
  margin-block-start: 0px;
  text-align: initial;
  :first-child {
    justify-self: flex-start;
    flex: 0rem;
  }
  .small-columns-contact-profile-info {
    flex: 0rem;
    margin-left: 0rem;
  }
}

.fields-profile-info {
  margin-top: 0rem;
  padding: 0px 0px;
  margin-left: 1rem;
  margin-block-end: 0rem;
}
.big-title-profile{
  color: $font-dark;
  font-weight: bolder;
  font-size: $medium-font;
  text-align: initial;
  margin: 0rem;
}
.title-info {
  color: $font-dark;
  font-size: $normal-font;
  margin-bottom: 0rem;
  text-align: initial;
}
.value-info {
  color: $font-gray;
  font-size: $normal-font;
  margin-bottom: 0rem;
  text-align: initial;
}
.address-profile{
  text-align: initial;
}
.activity-container{
  font-size: $large-font;
  margin-left: 3.8rem;
}
.image-profile{
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  margin-left: 2rem;
  margin-bottom: 2rem;
}
.company-name-profile{
  color: $font-dark;
  font-weight: bolder;
  font-size: $large-font;
  text-align: initial;
  margin-top: 2.1rem;
  margin-left: 5rem;
}
.edit-profile{
  height: 3rem;
  width: 3rem;
  filter: $filter-blue;
  margin-top: 6.2rem;
  margin-left: 10rem;
  display: flex;
}
</style>