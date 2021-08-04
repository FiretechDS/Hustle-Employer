<template>
    <div class="profile-card-container">
      <ProfileCard>
        <template v-slot:header>My profile</template>
        <template v-slot:body>
          <div class="rows-profile">
            <img :src="info.logoURL" class="image-profile">
            <div class="company-name-profile">
              <div class="row-item-profile">
                <input
                  v-model="info.companyName"
                  class="title-value-info-input mt-5"
                  :class="{titleeditable: page === 2 }"
                  id="company-name-profile"
                  type="text"
                />
                <input
                  v-model="info.logoURL"
                  class="value-info-input"
                  :class="{editable: page === 2 }"
                  id="logo-profile"
                  type="text"
                  v-if="page === 2"
                />
              </div>
            </div>
            <img src="@/assets/svg/edit-pencil.svg" class="edit-profile" @click="editProfile()" v-if="page === 1">
            <img src="@/assets/svg/check.svg" class="confirm-edit-profile" @click="saveProfile()" v-if="page === 2">
            <img src="@/assets/svg/cancel.svg" class="cancel-edit-profile" @click="cancel()" v-if="page === 2">
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
                    <input
                      v-model="info.email"
                      class="value-info-input"
                      :class="{editable: page === 2 }"
                      id="mail-profile"
                      type="text"
                    />
                  </li>
                  <li class="small-columns-profile-info">
                    <input
                      v-model="info.password"
                      class="value-info-input"
                      :class="{editable: page === 2 }"
                      id="password-profile"
                      type="password"
                    />
                  </li>
                </ul>
                <div class="row-item-profile">
                  <p class="title-info">Required Skills</p>
                  <perfect-scrollbar v-if="page === 1">
                    <ul class="skills-profile">
                     <li v-for="skill in info.skills" :key="skill.name">
                         <p class="value-info ps-items" > {{ skill.name }} </p>
                     </li>
                    </ul>
                  </perfect-scrollbar>
                </div>
                
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
                  <input
                      v-model="info.address.firstLine"
                      class="long-address-value-info-input"
                      :class="{longaddresseditable: page === 2 }"
                      id="city-profile"
                      type="text"
                    />
                  <p class="title-info">Second Line</p>
                  <input
                      v-model="info.address.secondLine"
                      class="long-address-value-info-input"
                      :class="{longaddresseditable: page === 2 }"
                      id="city-profile"
                      type="text"
                    />

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
                    <input
                      v-model="info.address.city"
                      class="address-value-info-input"
                      :class="{addresseditable: page === 2 }"
                      id="city-profile"
                      type="text"
                    />
                  </li>
                  <li class="small-columns-profile-info">
                    <input
                      v-model="info.address.state"
                      class="address-value-info-input"
                      :class="{addresseditable: page === 2 }"
                      id="state-profile"
                      type="text"
                    />
                  </li>
                  <li class="small-columns-profile-info">
                    <input
                      v-model="info.address.zip"
                      class="address-value-info-input"
                      :class="{addresseditable: page === 2 }"
                      id="zip-profile"
                      type="text"
                    />
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
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { createToast } from "mosha-vue-toastify";
import ProfileCard from "../ProfileCard.vue"

export default defineComponent({
  components: { ProfileCard },
  name: "ProfileMain",
  setup(){
    var info={
      companyName: 'Firetech',
      logoURL: 'https://i1.wp.com/i.imgflip.com/2ejoc0.jpg',
      email: 'staff@firetech.com',
      password: 'Firetech1234',
      skills:[
        {id: 1, name:'Dart'},
        {id: 2, name:'Vue'},
        {id: 3, name:'Spring'}
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

    /*const oldValues={
        companyName : info.companyName,
        logoURL : info.logoURL,
        email : info.email,
        password : info.password,
        address : {
          firstLine : info.address.firstLine
          secondLine : info.address.secondLine,
          state : info.address.state,
          city : info.address.city,
          zip : info.address.zip
        },
        skills : info.skills,
        contacts : info.contacts
      } */

    var isModalVisible = true;

    var page=ref(1);

    function editProfile(): void {
      page.value = 2;
      
    }

    function saveProfile(): void {
      page.value = 1;
      toast('Profile updated',true);
    }

    function cancel(): void{
      page.value = 1;
      toast('Operation cancelled',false);
    }

    function toast(message: string, success: boolean): void {
      createToast(message, {
        type: success ? "success" : "warning",
        toastBackgroundColor: "#39a9cb",
        position: "bottom-center",
        showIcon: true,
      });
    }
    console.log(isModalVisible);
    return{
      page,  
      editProfile,
      saveProfile,
      cancel,
      toast,
      info
    }
  },
});
</script>

<style lang="scss" scoped>
.profile-card-container{
  display: flex;
  justify-content: space-around;
  margin-top: 8rem;
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
  cursor: default;
}
.title-info {
  color: $font-dark;
  font-size: $normal-font;
  margin-bottom: 0rem;
  text-align: initial;
  cursor: default;
}
.value-info {
  color: $font-gray;
  font-size: $normal-font;
  margin-bottom: 0rem;
  text-align: initial;
  cursor: default;
}
.value-info-input {
  color: $font-gray;
  font-size: $normal-font;
  margin-bottom: 0rem;
  text-align: initial;
  margin-right: 1rem;
  margin-top:1.2rem;
  border-color: white;
  border: 0px;
  cursor: default;
}
.editable {
  color: $font-gray;
  font-size: $normal-font;
  margin-bottom: 0rem;
  text-align: initial;
  margin-top: 1.2rem;
  border-radius: 8px;
  margin-left: -1rem;
  border-color: transparent;
  padding: 6px;
  color: $font-gray;
  background: $lighter-gray;
  text-indent: 0.7rem;
  border: 0px;
  cursor: text;
}
.address-value-info-input {
  color: $font-gray;
  font-size: $normal-font;
  margin-bottom: 0rem;
  text-align: initial;
  margin-right: 1rem;
  margin-top:1.2rem;
  border-color: white;
  border: 0px;
  cursor: default;
  width: 10rem;
  margin-bottom: 5rem;
}
.addresseditable {
  color: $font-gray;
  font-size: $normal-font;
  margin-bottom: 0rem;
  text-align: initial;
  margin-top: 1.2rem;
  border-radius: 8px;
  margin-left: -1rem;
  width: 10rem;
  border-color: transparent;
  padding: 6px;
  color: $font-gray;
  background: $lighter-gray;
  text-indent: 0.7rem;
  border: 0px;
  margin-bottom: 5rem;
  cursor: text;
}
.long-address-value-info-input {
  color: $font-gray;
  font-size: $normal-font;
  margin-bottom: 0rem;
  text-align: initial;
  margin-right: 1rem;
  margin-top:1.2rem;
  border-color: white;
  border: 0px;
  cursor: default;
  width: 35rem
}
.longaddresseditable {
  color: $font-gray;
  font-size: $normal-font;
  margin-bottom: 0rem;
  text-align: initial;
  margin-top: 1.2rem;
  border-radius: 8px;
  margin-left: -1rem;
  width: 35rem;
  border-color: transparent;
  padding: 6px;
  color: $font-gray;
  background: $lighter-gray;
  text-indent: 0.7rem;
  border: 0px;
  cursor: text;
}
.title-value-info-input {
  color: $font-dark;
  font-size: $large-font;
  margin-bottom: 0rem;
  text-align: initial;
  margin-right: 1rem;
  margin-top:1.2rem;
  border-color: white;
  border: 0px;
  cursor: default;
  width: 50rem
}
.titleeditable {
  font-size: $large-font;
  margin-bottom: 0rem;
  text-align: initial;
  margin-top: 1.2rem;
  border-radius: 8px;
  margin-left: -1rem;
  width: 50rem;
  border-color: transparent;
  padding: 6px;
  color: $font-gray;
  background: $lighter-gray;
  text-indent: 0.7rem;
  border: 0px;
  cursor: text;
}
.skills-profile{
  padding-inline-start: 2rem;
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
  margin-left: 20rem;
  margin-right: 5rem;
  display: flex;
}
.confirm-edit-profile{
  height: 3rem;
  width: 3rem;
  filter: $filter-blue;
  margin-top: 6.2rem;
  margin-left: 20rem;
  margin-right: 5rem;
  display: flex;
}
.cancel-edit-profile{
  height: 3rem;
  width: 3rem;
  margin-top: 6.2rem;
  margin-left: 2rem;
  margin-right: 5rem;
  display: flex;
  filter: $filter-red;
}
.ps{
  min-height: 4rem;
  max-height: 10rem;
  width: 20rem;
}
.ps-items{
  margin-top: -0.2rem;
}
</style>