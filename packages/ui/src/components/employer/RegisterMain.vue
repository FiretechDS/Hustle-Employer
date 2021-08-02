<template>
  <div class="register-container" v-if="page === 1">
    <WhiteVerticalCard>
      <template v-slot:header>Employer Register</template>
      <template v-slot:body>
        <form @submit.prevent="setPage(2)" class="content-register">
          <div class="multiple-items-register">
            <input
              v-model="registerInfo.email"
              class="two-inputs-register"
              placeholder="Email"
              id="email-register"
              type="text"
            />
            <input
              v-model="registerInfo.password"
              class="two-inputs-register"
              placeholder="Password"
              id="password-register"
              type="password"
            />
          </div>
          <input
            v-model="registerInfo.companyName"
            class="full-line-input-register"
            placeholder="Company Name"
            id="name-register"
            type="text"
          />
          <div class="normal-flex two">
            <input
              v-model="registerInfo.logo"
              class="two-inputs-register"
              placeholder="Logo URL"
              id="mail-login"
              type="text"
            />
            <Multiselect
              :options="registerInfo.skills.options"
              v-bind="registerInfo.skills"
              v-model="registerInfo.skills.value"
              placeholder="Skills"
              mode="multiple"
              class="multi-select"
              id="skills-input"
            >
              <template v-slot:multiplelabel="{ values }">
                <div class="multiselect-multiple-label">
                  {{ values.length }} skills selected
                </div>
              </template>
            </Multiselect>
          </div>
          <p class="subtitle-register">Address</p>
          <input
            v-model="registerInfo.firstLineAddress"
            class="full-line-input-register"
            placeholder="First Line"
            id="firs-line-address-register"
            type="text"
          />
          <input
            v-model="registerInfo.secondLineAddress"
            class="full-line-input-register"
            placeholder="Second Line"
            id="second-line-address-register"
            type="text"
          />
          <div class="multiple-items-register">
            <input
              v-model="registerInfo.state"
              class="location-input-register"
              placeholder="State"
              type="text"
            />
            <input
              v-model="registerInfo.city"
              class="location-input-register"
              placeholder="City"
              type="text"
            />
            <input
              v-model="registerInfo.zip"
              class="zip-input-register"
              placeholder="ZIP"
              id="mail-login"
              type="number"
            />
          </div>
          <p class="error">{{ message }}</p>
          <Button
            @click.stop
            buttonText="Next"
            :isPrimary="true"
            @click="setPage(2)"
            id="next-button"
            :style="{
              width: '23.6rem',
              height: '3.6rem',
              'margin-bottom': '2rem',
            }"
          />
        </form>
      </template>
    </WhiteVerticalCard>
  </div>
  <div v-else class="register-container">
    <WhiteVerticalCard>
      <template v-slot:header>
        <div class="title-two">
          <img
            class="arrow-back-register"
            @click.stop
            @click="setPage(1)"
            :src="require('@/assets/svg/arrow_back.svg')"
          />
          <p>Employer Register</p>
        </div>
      </template>
      <template v-slot:body>
        <div class="content-register-contact">
          <div class="multiple-items-register tight">
            <p class="subtitle-register">Contact Information</p>
            <div class="icon tooltip">
              <img
                class="cardIconsContactPlus"
                @click.stop
                :src="require('@/assets/svg/plus.svg')"
                @click="showModal"
              />
            </div>
          </div>
          <div class="gray-line"></div>
          <div v-if="registerInfo.contacts.length === 0">
            <div class="no-contact-register">
              <p>Add at least one contact from your company by</p>
              <p>clicking on the add button.</p>
            </div>
          </div>
          <div v-else>
            <div>
              <li
                v-for="contact in registerInfo.contacts"
                v-bind:key="contact.id"
                class="list-contacts-register"
              >
                <GrayCard>
                  <template v-slot:body>
                    <ul class="details-contact-register">
                      <li>
                        <p>{{ contact.firstName }}</p>
                      </li>
                      <li>
                        <p>{{ contact.lastName }}</p>
                      </li>
                      <li>
                        <p>{{ contact.jobTitle }}</p>
                      </li>
                      <li>
                        <div class="icon tooltip">
                          <img
                            class="cardIconsContact"
                            @click.stop
                            :src="require('@/assets/svg/edit.svg')"
                          />
                        </div>
                        <div class="icon tooltip">
                          <img
                            class="cardIconsContact"
                            @click="deleteContact(contact.id)"
                            :src="require('@/assets/svg/delete.svg')"
                          />
                        </div>
                      </li>
                    </ul>
                  </template>
                </GrayCard>
              </li>
            </div>
          </div>
          <Loader class="loading" :loading="loading" color="#39a9cb" />
          <p class="error">{{ message }}</p>

          <div class="register-button-final">
            <Button
              buttonText="Register"
              :isPrimary="true"
              @click="register"
              id="register-button"
              :style="{
                width: '23.6rem',
                height: '3.6rem',
                'margin-bottom': '2rem',
              }"
            />
          </div>
        </div>
      </template>
    </WhiteVerticalCard>
    <Modal v-show="state.isModalVisible" @close="closeModal()">
      <template v-slot:header>Contact</template>
      <template v-slot:body>
        <div class="multiple-items-register.tight">
          <input
            v-model="contactInfo.firstName"
            class="double-input-register-contact margin_between-double"
            placeholder="First Name"
            id="register-contact-first-name"
            type="text"
          />
          <input
            v-model="contactInfo.lastName"
            class="double-input-register-contact"
            placeholder="Last Name"
            id="register-contact-last-name"
            type="text"
          />
        </div>
        <div class="multiple-items-register.tight">
          <input
            v-model="contactInfo.jobTitle"
            class="double-input-register-contact margin_between-double"
            placeholder="Job title"
            id="register-contact-job-title"
            type="text"
          />
          <input
            v-model="contactInfo.phoneNumber"
            class="double-input-register-contact"
            placeholder="Phone (584129998877)"
            id="register-contact-phone-number"
            type="tel"
          />
        </div>
        <input
          v-model="contactInfo.email"
          class="email-input-register-contact"
          placeholder="Email"
          id="register-contact-email"
          type="text"
        />
      </template>
      <template v-slot:footer>
        <div class="card-multiple-items-register">
          <Button
            buttonText="Save"
            :isPrimary="true"
            @click="addContact"
            id="add-contact-button"
            :style="{
              width: '15rem',
              height: '3.6rem',
            }"
          />
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, inject } from "vue";
import WhiteVerticalCard from "../WhiteVerticalCard.vue";
import Button from "../Button.vue";
import Multiselect from "@vueform/multiselect";
import GrayCard from "../GrayCard.vue";
import { skills } from "../jobOffers/skills";
import Modal from "../Modal.vue";
import ContactInfoType from "./types/ContactInfo";
import { usePlocState } from "../../common/UsePlocState";
import { SkillPloc, validateEmployer } from "../../../../core/src";
import { RegisterEmployerUseCase } from "../../../../core/src/employer/application/port/in/RegisterEmployerUseCase";
import { ProfileProps } from "../../../../core/src/employer/domain/EmployerDomainMapper";
import Loader from "../Loader.vue";

export default defineComponent({
  setup() {
    const skillPloc = inject<SkillPloc>("skillsPloc") as SkillPloc;
    const registerService = inject<RegisterEmployerUseCase>(
      "registerService"
    ) as RegisterEmployerUseCase;
    const skillState = usePlocState(skillPloc);
    const message = ref("");
    const loading = ref(false);
    const registerInfo = reactive({
      companyName: "" as string,
      email: "" as string,
      password: "" as string,
      skills: {
        value: [] as Array<number>,
        options: skills.map((skill) => {
          return { value: skill.id, label: skill.habilityName };
        }),
      },
      logo: "" as string,
      firstLineAddress: "" as string,
      secondLineAddress: "" as string,
      city: "" as string,
      state: "" as string,
      zip: "" as string,
      contacts: [] as Array<ContactInfoType>,
    });

    const contactInfo = reactive({
      id: 1 as number,
      firstName: "" as string,
      lastName: "" as string,
      jobTitle: "" as string,
      phoneNumber: "" as string,
      email: "" as string,
    });

    var page = ref(1);

    function setPage(actual: number): void {
      message.value = "";
      if (page.value === 1) {
        const validated = validateEmployer(map());
        validated.fold(
          (err: string) => {
            if (err.includes("You must enter at least one contact"))
              page.value = actual;
            else message.value = err;
          },
          () => {
            page.value = actual;
          }
        );
      } else page.value = actual;
    }

    const state = reactive({
      isModalVisible: false as boolean,
    });
    function showModal(): void {
      state.isModalVisible = true;
      console.log("open");
    }
    function closeModal(): void {
      state.isModalVisible = false;
      console.log("closed");
    }

    function addContact(): void {
      const newContact = {
        id: contactInfo.id,
        firstName: contactInfo.firstName,
        lastName: contactInfo.lastName,
        jobTitle: contactInfo.jobTitle,
        phoneNumber: contactInfo.phoneNumber,
        email: contactInfo.email,
      };
      registerInfo.contacts.push(newContact);
      console.log(registerInfo.contacts);
      closeModal();
      setContactToDefault();
    }

    function changeID(): void {
      contactInfo.id = registerInfo.contacts.length + 1;
    }

    function setContactToDefault(): void {
      contactInfo.id = registerInfo.contacts.length + 1;
      contactInfo.firstName = "";
      contactInfo.lastName = "";
      contactInfo.phoneNumber = "";
      contactInfo.jobTitle = "";
      contactInfo.email = "";
    }

    function deleteContact(idDelete: number): void {
      registerInfo.contacts = registerInfo.contacts.filter(
        (contact) => contact.id != idDelete
      );
    }
    function map(): ProfileProps {
      const mapped: ProfileProps = {
        ...registerInfo,
        logoURL: registerInfo.logo,
        zip: parseInt(registerInfo.zip),
        skills: registerInfo.skills.value.map((skill) => {
          return {
            name: "any",
            number: skill,
            category: 1,
          };
        }),
        contacts: registerInfo.contacts.map((contact) => {
          return {
            ...contact,
            phoneNumber: parseInt(contact.phoneNumber),
          };
        }),
      };
      return mapped;
    }
    async function register(): Promise<void> {
      console.log(registerInfo);
      loading.value = true;
      const registerResult = await registerService.register(map());
      registerResult.fold(
        (err) => {
          const msg: string =
            err.kind === "ApiError" ? err.message : err.message.message;
          message.value = msg;
        },
        () => {
          message.value = "Success";
        }
      );
      loading.value = false;
    }

    return {
      registerInfo,
      page,
      setPage,
      state,
      showModal,
      closeModal,
      contactInfo,
      addContact,
      register,
      deleteContact,
      message,
      loading,
    };
  },
  components: {
    WhiteVerticalCard,
    Button,
    Multiselect,
    GrayCard,
    Modal,
    Loader,
  },
  name: "RegisterMain",
  created() {
    console.log(this.state);
  },
});
</script>

<style lang="scss" scoped>
.error {
  color: $highlit-darkblue;
}
.loading {
  margin: 3rem 0;
}
.content-register {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  //  justify-content: space-around;
  //  width: 43rem;
  //  height: 48rem;
  margin-right: 2rem;
  margin-left: 2.2rem;
  .subtitle-register {
    align-self: flex-start;
    padding-bottom: 1rem;
  }
}
.subtitle-register {
  font-size: $medium-small-font;
  font-weight: bolder;
}
.multiple-items-register {
  display: flex;
  justify-content: space-around;
  list-style-type: none;

  :first-child {
    flex: 1;
    margin-right: 2.1rem;
  }
  .small-columns {
    flex: 0.5;
  }
}
.normal-flex {
  display: flex;
  width: 45rem;
  justify-content: space-between;
}
.multiple-items-register.tight {
  width: fit-content;
  align-items: center;
}
.two-inputs-register {
  font-family: "Poppins";
  margin-bottom: 2.5rem;
  display: inline-block;
  border-radius: 8px;
  border-color: transparent;
  padding: 6px;
  color: $font-gray;
  background: $lighter-gray;
  width: 20rem;
  text-indent: 0.7rem;
  max-width: 20rem;
  max-height: 2.7rem;
}
.multi-select {
  width: 20rem;
  margin-bottom: 2.5rem;
  margin-right: 0;
  color: $font-gray;
  :first-child {
    margin-right: 0;
  }
}
.input-register {
  font-family: "Poppins";
  margin-bottom: 2.5rem;
  display: inline-block;
  border-radius: 8px;
  border-color: transparent;
  padding: 6px;
  color: $font-gray;
  background: $lighter-gray;
  width: 22rem;
  text-indent: 0.7rem;
  max-width: 22rem;
}
.full-line-input-register {
  font-family: "Poppins";
  margin-bottom: 2.5rem;
  display: inline-block;
  border-radius: 8px;
  border-color: transparent;
  padding: 6px;
  color: $font-gray;
  background: $lighter-gray;
  width: 44rem;
  text-indent: 0.7rem;
}
.zip-input-register {
  font-family: "Poppins";
  margin-bottom: 2.5rem;
  display: inline-block;
  border-radius: 8px;
  border-color: transparent;
  padding: 6px;
  color: $font-gray;
  background: $lighter-gray;
  width: 5rem;
  text-indent: 0.7rem;
  margin-left: 2.1rem;
}
.location-input-register {
  font-family: "Poppins";
  margin-bottom: 2.5rem;
  display: inline-block;
  border-radius: 8px;
  border-color: transparent;
  padding: 6px;
  color: $font-gray;
  background: $lighter-gray;
  width: 15.7rem;
  text-indent: 0.7rem;
}

//else
.content-register-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  //  justify-content: space-around;
  //  width: 43rem;
  //  height: 48rem;
  margin-right: 2rem;
  margin-left: 2.2rem;
}
.card-multiple-items-register {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  color: $font-dark;
  margin-top: -8px;
}
.multiple-items-register {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  width: 45rem;
  :first-child {
    justify-self: flex-start;
    flex: 1;
    margin-right: 2.1rem;
  }
}
.title-two {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: 1rem;
  width: 81.5%;
  :first-child {
    margin-right: auto;
    margin-left: 1rem;
  }
  p {
    margin: 0;
    justify-self: center;
  }
}
.two {
  justify-content: space-between;
}
.details-contact-register {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin-top: -1rem;
  padding: 0px;
  width: 40rem;
  :first-child {
    justify-self: flex-start;
    flex: 0;
  }
}
.cardIconsContact {
  width: 2rem;
  height: 2rem;
  filter: $filter-blue;
  margin-top: 1.5rem;
  margin-right: 1rem;
}
.cardIconsContactPlus {
  width: 4rem;
  height: 4rem;
  filter: $filter-blue;
  margin-top: 0.3rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
.no-contact-register {
  color: $font-gray;
}
.gray-line {
  background: $font-light;
  width: 40rem;
  height: 0.1rem;
  border-radius: 10px;
  margin-top: 1rem;
}
.list-contacts-register {
  list-style-type: none;
}
.register-button-final {
  padding: 1rem;
}
.arrow-back-register {
  filter: $filter-gray;
  margin: 0;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
}

//contact info form
.double-input-register-contact {
  font-family: "Poppins";
  margin-bottom: 2.5rem;
  display: inline-block;
  border-radius: 8px;
  border-color: transparent;
  padding: 6px;
  color: $font-gray;
  background: $lighter-gray;
  width: 15.7rem;
  text-indent: 0.7rem;
}
.margin_between-double {
  margin-right: 1rem;
}
.email-input-register-contact {
  font-family: "Poppins";
  margin-bottom: 2.5rem;
  display: inline-block;
  border-radius: 8px;
  border-color: transparent;
  padding: 6px;
  color: $font-gray;
  background: $lighter-gray;
  width: 34rem;
  text-indent: 0.7rem;
}
.register-container {
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(
      115.8deg,
      rgba(57, 169, 203, 0.8) 2.27%,
      rgba(53, 112, 138, 0.8) 18.55%,
      rgba(48, 53, 71, 0.8) 92.22%
    ),
    url("../../../public/img/blue-buildings.jpg");
  background-blend-mode: darken;
}
</style>
