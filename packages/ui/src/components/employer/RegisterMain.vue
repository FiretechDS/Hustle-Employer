<template>
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
                 <Button buttonText="Next" :isPrimary="false" @click="nextRegister()" id="register-button" :style="{width: '23.6rem', height: '3.6rem'}"/>
            </div>
        </template>
    </WhiteVerticalCard>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import WhiteVerticalCard from '../WhiteVerticalCard.vue'
import Button from "../Button.vue"
import Multiselect from '@vueform/multiselect';
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
        zip: 0 as number
      })

      function nextRegister() {
          console.log(registerInfo)
      }

        return {registerInfo}
    },
    components: { WhiteVerticalCard, Button, Multiselect },
    name: 'RegisterMain'
})
</script>

<style lang="scss" scoped>
.content-register{
  display: flex;
  flex-direction: column;
  align-items: center;
//  justify-content: space-around;
  width: 43rem;
  height: 48rem;
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
.subtitle-register{
    font-size: $normal-font;
    display:flex;
    justify-self: flex-start;
    margin-right: 38rem;
}
</style>
