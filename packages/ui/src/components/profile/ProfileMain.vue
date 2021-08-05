<template>
  <div class="profile-card-container">
    <ProfileCard>
      <template v-slot:header>
        <div class="header">
          <span class="title">My Profile</span>
          <div
            v-if="message.loading"
            :loading="message.loading"
            class="title-loader"
          >
            <Loader color="#39a9cb" />
          </div></div
      ></template>
      <template v-slot:body v-if="state.kind === 'loading'">
        <div class="loader">
          <p>Loading profile...</p>
          <Loader color="#39a9cb" />
        </div>
      </template>
      <template v-slot:body v-else-if="state.kind === 'error'">
        <img :src="require('@/assets/svg/disconnected.svg')" />
        <h2 class>{{ state.error }}</h2>
        <p>{{ state.kind }}</p>
        <div class="error"></div>
      </template>
      <template v-else-if="state.kind === 'loaded'" v-slot:body>
        <div class="rows-profile">
          <img :src="info.logoURL" class="image-profile" />
          <div class="company-name-profile">
            <div class="row-item-profile">
              <input
                v-model="info.companyName"
                :readonly="page === 1"
                class="title-value-info-input mt-5"
                :class="{ titleeditable: page === 2 }"
                id="company-name-profile"
                type="text"
              />
              <input
                v-model="info.logoURL"
                class="value-info-input"
                :class="{ editable: page === 2 }"
                id="logo-profile"
                type="text"
                v-if="page === 2"
              />
            </div>
          </div>
          <img
            src="@/assets/svg/edit-pencil.svg"
            class="edit-profile"
            @click="editProfile()"
            v-if="page === 1"
          />
          <img
            src="@/assets/svg/check.svg"
            class="confirm-edit-profile"
            @click="saveProfile()"
            v-if="page === 2"
          />
          <img
            src="@/assets/svg/cancel.svg"
            class="cancel-edit-profile"
            @click="cancel()"
            v-if="page === 2"
          />
        </div>
        <div class="rows-profile">
          <div class="row-item-profile">
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
                    :readonly="page === 1"
                    class="value-info-input"
                    :class="{ editable: page === 2 }"
                    id="mail-profile"
                    type="text"
                  />
                </li>
                <li class="small-columns-profile-info">
                  <input
                    v-model="info.password"
                    :readonly="page === 1"
                    class="value-info-input"
                    :class="{ editable: page === 2 }"
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
                      <p class="value-info ps-items">{{ skill.name }}</p>
                    </li>
                  </ul>
                </perfect-scrollbar>
              </div>
            </div>
          </div>

          <div class="row-item-profile">
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
              <ul
                v-for="contact in info.contacts"
                :key="contact"
                class="contact-columns-profile-info"
              >
                <li>
                  <p class="value-info">
                    {{ contact.firstName + contact.lastName }}
                  </p>
                </li>
                <li class="small-columns-contact-profile-info">
                  <p class="value-info">{{ contact.jobTitle }}</p>
                </li>
                <li class="small-columns-contact-profile-info">
                  <p class="value-info">{{ contact.phoneNumber }}</p>
                </li>
                <li class="small-columns-contact-profile-info">
                  <p class="value-info">{{ contact.email }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="rows-profile">
          <div class="row-item-profile">
            <div class="fields-profile-info">
              <p class="big-title-profile">Address</p>
              <div class="address-profile">
                <p class="title-info">First Line</p>
                <input
                  v-model="info.firstLineAddress"
                  class="long-address-value-info-input"
                  :readonly="page === 1"
                  :class="{ longaddresseditable: page === 2 }"
                  id="city-profile"
                  type="text"
                />
                <p class="title-info">Second Line</p>
                <input
                  v-model="info.secondLineAddress"
                  class="long-address-value-info-input"
                  :readonly="page === 1"
                  :class="{ longaddresseditable: page === 2 }"
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
                      v-model="info.city"
                      class="address-value-info-input"
                      :readonly="page === 1"
                      :class="{ addresseditable: page === 2 }"
                      id="city-profile"
                      type="text"
                    />
                  </li>
                  <li class="small-columns-profile-info">
                    <input
                      v-model="info.state"
                      :readonly="page === 1"
                      class="address-value-info-input"
                      :class="{ addresseditable: page === 2 }"
                      id="state-profile"
                      type="text"
                    />
                  </li>
                  <li class="small-columns-profile-info">
                    <input
                      v-model="info.zip"
                      :readonly="page === 1"
                      class="address-value-info-input"
                      :class="{ addresseditable: page === 2 }"
                      id="zip-profile"
                      type="text"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row-item-profile">
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
                  <p class="value-info">{{ offerStats.publishNumber }}</p>
                </li>
                <li class="small-columns-contact-profile-info">
                  <p class="value-info">{{ offerStats.archiveNumber }}</p>
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
              <ul class="contact-columns-profile-info activity-container">
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
            <p class="message">{{ message.value }}</p>
          </div>
        </div>
      </template>
    </ProfileCard>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  inject,
  onBeforeMount,
  computed,
  ComputedRef,
  watch,
} from "vue";
import { createToast } from "mosha-vue-toastify";
import ProfileCard from "../ProfileCard.vue";
import { ProfilePloc } from "../../../../core/src/employer/presentation/ProfilePloc";
import { usePlocState } from "../../common/UsePlocState";
import { useStore } from "vuex";
import { profilePresentationProps } from "../../../../core/src/employer/presentation/EmployerPresentationModel";
import Loader from "../Loader.vue";
import { JobOfferPloc } from "../../../../core/src/jobOffer/presentation";

export default defineComponent({
  components: { ProfileCard, Loader },
  name: "ProfileMain",
  setup() {
    const profilePloc = inject<ProfilePloc>("profilePloc") as ProfilePloc;
    const jobPloc = inject<JobOfferPloc>("jobOfferPloc") as JobOfferPloc;
    const jobState = usePlocState(jobPloc);
    const store = useStore();
    const state = usePlocState(profilePloc);

    const loginData: { email: string; password: string } = {
      ...store.getters["authModule/data"],
    };

    const message = reactive({ loading: false, value: "" });

    onBeforeMount(() => {
      profilePloc.setEmployer(store.getters["authModule/user"]);
    });

    const info: profilePresentationProps = reactive({
      id: NaN,
      email: "",
      password: "",
      logoURL: "",
      companyName: "",
      skills: [],
      firstLineAddress: "",
      secondLineAddress: "",
      state: "",
      city: "",
      zip: NaN,
      contacts: [],
    });
    function setInfo(profile: profilePresentationProps) {
      info.id = profile.id;
      info.email = loginData.email;
      info.zip = profile.zip;
      info.contacts = profile.contacts;
      info.password = loginData.password;
      info.logoURL = profile.logoURL;
      info.companyName = profile.companyName;
      info.skills = profile.skills;
      info.firstLineAddress = profile.firstLineAddress;
      info.secondLineAddress = profile.secondLineAddress;
      info.state = profile.state;
      info.city = profile.city;
    }
    watch(state, (currentState, old) => {
      if (currentState.kind === "loaded") {
        setInfo(currentState.profile);
      }
    });

    const offerStats = computed(() => {
      if (jobState.value.kind === "LoadedOffersState") {
        return {
          publishNumber: jobState.value.activeOffers.length,
          archiveNumber: jobState.value.archiveOffers.length,
        };
      }
      return {
        publishNumber: 0,
        archiveNumber: 0,
      };
    });
    var page = ref(1);

    function editProfile(): void {
      page.value = 2;
    }

    async function saveProfile(): Promise<void> {
      message.loading = true;
      message.value = "";
      const result = await profilePloc.updateEmployer(info);
      if (result.success) {
        page.value = 1;
        toast("Profile updated", true);
      } else {
        message.value = result.value;
      }
      message.loading = false;
    }

    function cancel(): void {
      page.value = 1;
      if (state.value.kind === "loaded") {
        setInfo(state.value.profile);
      }
      toast("Operation cancelled", false);
    }

    function toast(message: string, success: boolean): void {
      createToast(message, {
        type: success ? "success" : "warning",
        toastBackgroundColor: "#39a9cb",
        position: "bottom-center",
        showIcon: true,
      });
    }
    return {
      page,
      state,
      editProfile,
      saveProfile,
      cancel,
      toast,
      info,
      offerStats,
      message,
    };
  },
});
</script>

<style lang="scss" scoped>
.title-loader {
  transform: translate(3rem, -1rem);
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.message {
  text-align: left;
  color: $highlit-darkblue;
  font-weight: bolder;
}
.loader {
  width: 50vw;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    flex: 0.5;
    font-size: $medium-small-font;
  }
  Loader {
    flex: 1;
  }
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
.profile-card-container {
  display: flex;
  justify-content: space-around;
  margin-top: 8rem;
  font-family: "Poppins", sans-serif;
}
.rows-profile {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
}
.row-item-profile {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}
.skills-profile {
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
.big-title-profile {
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
  margin-top: 1.2rem;
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
  margin-top: 1.2rem;
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
  margin-top: 1.2rem;
  border-color: white;
  border: 0px;
  cursor: default;
  width: 35rem;
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
  margin-top: 1.2rem;
  border-color: white;
  border: 0px;
  cursor: default;
  width: 50rem;
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
.skills-profile {
  padding-inline-start: 2rem;
}
.address-profile {
  text-align: initial;
}
.activity-container {
  font-size: $large-font;
  margin-left: 3.8rem;
}
.image-profile {
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  margin-left: 2rem;
  margin-bottom: 2rem;
}
.company-name-profile {
  color: $font-dark;
  font-weight: bolder;
  font-size: $large-font;
  text-align: initial;
  margin-top: 2.1rem;
  margin-left: 5rem;
}
.edit-profile {
  height: 3rem;
  width: 3rem;
  filter: $filter-blue;
  margin-top: 6.2rem;
  margin-left: 20rem;
  margin-right: 5rem;
  display: flex;
}
.confirm-edit-profile {
  height: 3rem;
  width: 3rem;
  filter: $filter-blue;
  margin-top: 6.2rem;
  margin-left: 20rem;
  margin-right: 5rem;
  display: flex;
}
.cancel-edit-profile {
  height: 3rem;
  width: 3rem;
  margin-top: 6.2rem;
  margin-left: 2rem;
  margin-right: 5rem;
  display: flex;
  filter: $filter-red;
}
.ps {
  min-height: 4rem;
  max-height: 10rem;
  width: 20rem;
}
.ps-items {
  margin-top: -0.2rem;
}
</style>