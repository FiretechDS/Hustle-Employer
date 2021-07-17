<template>
    <div v-if="page === 1">
    <WhiteVerticalCard>
        <template v-slot:header>Employer Register</template>
        <template v-slot:body>
            <div class="content-register">
                <div class="multiple-items-register">
                    <input v-model="registerInfo.email" class="two-inputs-register" placeholder="Email" id="email-register" type="text"/>
                    <input v-model="registerInfo.password" class="two-inputs-register" placeholder="Password" id="password-register" type="password"/>
                </div>
                <input v-model="registerInfo.companyName" class="full-line-input-register" placeholder="Company Name" id="name-register" type="text"/>
                <div class="multiple-items-register">
                <Multiselect 
                :options="registerInfo.skills.options" v-bind="registerInfo.skills"
                v-model="registerInfo.skills.value" placeholder="Skills" 
                mode="multiple" class="two-inputs-register" id="skills-input"
              />
                <input v-model="registerInfo.logo" class="two-inputs-register" placeholder="Logo" id="mail-login" type="text"/>
                </div>
                <p class="subtitle-register">Address</p>
                <input v-model="registerInfo.firstLineAddress" class="full-line-input-register" placeholder="First Line" id="firs-line-address-register" type="text"/>
                <input v-model="registerInfo.secondLineAddress" class="full-line-input-register" placeholder="Second Line" id="second-line-address-register" type="text"/>
                <div class="multiple-items-register">
                    <input v-model="registerInfo.state" class="location-input-register" placeholder="State" id="mail-login" type="text"/>
                    <input v-model="registerInfo.city" class="location-input-register" placeholder="City" id="mail-login" type="text"/>
                    <input v-model="registerInfo.zip" class="zip-input-register" placeholder="ZIP" id="mail-login" type="text"/>
                </div>
                 <Button buttonText="Next" :isPrimary="false" @click="setPage(2)" id="next-button" :style="{width: '23.6rem', height: '3.6rem'}"/>
            </div>
        </template>
    </WhiteVerticalCard>
    </div>
    <div v-else>
        <WhiteVerticalCard>
        <template v-slot:header>
            <div class="multiple-items-register">
                    <img
                                class="arrow-back-register"
                                @click.stop
                                :src="require('@/assets/svg/arrow_back.svg')"
                    />
                    <p>Employer Register</p>
            </div></template>
        <template v-slot:body>
            <div class="content-register-contact">
                <div class="multiple-items-register">
                    <p class="subtitle-register">Contact Information</p>
                    <div class="icon tooltip">
                            <img
                                class="cardIconsContactPlus "
                                @click.stop
                                :src="require('@/assets/svg/plus.svg')"
                            />
                    </div>
                </div>
                <div class="gray-line"></div>
                <div v-if="registerInfo.contacts.length===0">
                    <div class="no-contact-register">
                        <p>Add at least one contact from your company by</p>
                        <p> clicking on the add button</p>
                    </div>
                </div>
                <div v-else>
                    <div>
                      <li v-for="contact in registerInfo.contacts" :key="registerInfo.contacts.indexOf(id)" class="list-contacts-register">
                        <GrayCard> 
                            <template v-slot:body>
                                <ul class="details-contact-register">
                                <li>
                                    <p>{{contact.firstName}}</p>
                                </li>
                                <li>
                                    <p>{{contact.lastName}}</p>
                                </li>
                                <li>
                                    <p>{{contact.role}}</p>
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
                                        @click.stop
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
                <div class="register-button-final">
                    <Button buttonText="Register" :isPrimary="true" @click="setPage(1)" id="register-button" :style="{width: '22rem', height: '3.6rem'}"/>
                </div>
            </div> 
        </template>
    </WhiteVerticalCard>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import WhiteVerticalCard from '../WhiteVerticalCard.vue'
import Button from "../Button.vue"
import Multiselect from '@vueform/multiselect';
import GrayCard from "../GrayCard.vue"
import {skills} from "../jobOffers/skills";

export default defineComponent({
    setup() {

    const registerInfo = reactive ({
        companyName: "" as string,
        email: "" as string,
        password: "" as string,
        skills:{
         value:[] as Array<number>,
         options:skills.map(skill=>{
           return {value:skill.id, label:skill.habilityName}
         }) 
        },
        logo: "" as string,
        firstLineAddress: "" as string,
        secondLineAddress: "" as string,
        city: "" as string,
        state: "" as string,
        zip: 0 as number,
        contacts: [
        ]
    })
    
           var page = ref(1)

    function setPage(actual: number):void {
          page.value = actual;
    }
 

        return {registerInfo, page, setPage}
    },
    components: { WhiteVerticalCard, Button, Multiselect, GrayCard },
    name: 'RegisterMain'
})
</script>

<style lang="scss" scoped>

.content-register{
  display: flex;
  flex-direction: column;
  align-items: center;
//  justify-content: space-around;
//  width: 43rem;
//  height: 48rem;
  margin-right: 2rem;
 margin-left: 2.2rem;
}
.multiple-items-register{
    display: flex;
    justify-content: space-around;
    list-style-type: none;

    :first-child {
        justify-self: flex-start;
        flex: 1;
        margin-right: 2.1rem;
    }
    .small-columns{
        flex: 0.5;
        
     }
}
.two-inputs-register{
  font-family: 'Poppins';
  margin-bottom: 2.5rem;
  display: inline-block;
  border-radius: 8px;
  border-color: transparent;
  padding: 6px;
  color:$font-gray;
  background: $lighter-gray;
  width: 20rem;
  text-indent: 0.7rem;
  max-width: 20rem;
  max-height: 2.7rem;
}
.input-register{
  font-family: 'Poppins';
  margin-bottom: 2.5rem;
  display: inline-block;
  border-radius: 8px;
  border-color: transparent;
  padding: 6px;
  color:$font-gray;
  background: $lighter-gray;
  width: 22rem;
  text-indent: 0.7rem;
  max-width: 22rem;
}
.full-line-input-register{
  font-family: 'Poppins';
  margin-bottom: 2.5rem;
  display: inline-block;
  border-radius: 8px;
  border-color: transparent;
  padding: 6px;
  color:$font-gray;
  background: $lighter-gray;
  width: 44rem;
  text-indent: 0.7rem;
}
.zip-input-register{
  font-family: 'Poppins';
  margin-bottom: 2.5rem;
  display: inline-block;
  border-radius: 8px;
  border-color: transparent;
  padding: 6px;
  color:$font-gray;
  background: $lighter-gray;
  width: 5rem;
  text-indent: 0.7rem;
  margin-left: 2.1rem;
}
.location-input-register{
  font-family: 'Poppins';
  margin-bottom: 2.5rem;
  display: inline-block;
  border-radius: 8px;
  border-color: transparent;
  padding: 6px;
  color:$font-gray;
  background: $lighter-gray;
  width: 15.7rem;
  text-indent: 0.7rem;
}

//else
.content-register-contact{
  display: flex;
  flex-direction: column;
  align-items: center;
//  justify-content: space-around;
//  width: 43rem;
//  height: 48rem;
  margin-right: 2rem;
  margin-left: 2.2rem;
}
.card-multiple-items-register{
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    color: $font-dark;
    margin-top: -8px;
}
.multiple-items-register{
    display: flex;
    justify-content: space-around;
    list-style-type: none;

    :first-child {
        justify-self: flex-start;
        flex: 1;
        margin-right: 2.1rem;
    }
}
.details-contact-register{
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
.cardIconsContactPlus{
  width: 2.8rem;
  height: 2.8rem;
  filter: $filter-blue;
  margin-top: 0.3rem;
}
.no-contact-register{
    color: $font-gray;
}
.gray-line{
  background: $font-light;
  width: 40rem;
  height: 0.1rem;
  border-radius: 10px;
  margin-top: 1rem;
}
.list-contacts-register{
    list-style-type: none;
}
.register-button-final{
    padding: 1rem;
}
.arrow-back-register{
    filter: $filter-gray;
    width: 4rem;
    height: 4rem;
    margin-top: 4rem;
}

</style>
