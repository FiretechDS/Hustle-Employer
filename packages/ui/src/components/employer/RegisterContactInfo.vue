<template>
    <WhiteVerticalCard>
        <template v-slot:header>Employer Register</template>
        <template v-slot:body>
            <div class="content-register-contact">
                <p class="subtitle-register">Contacts</p>
                <GrayCard> 
                    <ul class="multiple-items-register">
                        <li>
                            <p>David</p>
                        </li>
                        <li>
                            <p>Ortuño</p>
                        </li>
                        <li>
                            <p>Developer</p>
                        </li>
                        <li>
                            <p>Botones</p>
                        </li>
                    </ul>
                </GrayCard>
                <div class="multiple-items-register">
                    <Button buttonText="Previous" :isPrimary="false" @click="nextRegister()" id="previous-button" :style="{width: '15rem', height: '3.6rem'}"/>
                    <Button buttonText="Register" :isPrimary="true" @click="nextRegister()" id="register-button" :style="{width: '22rem', height: '3.6rem'}"/>
                </div>
            </div> 
        </template>
    </WhiteVerticalCard>
    
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import WhiteVerticalCard from '../WhiteVerticalCard.vue'
import Button from "../Button.vue"
import GrayCard from "../GrayCard.vue"

export default defineComponent({
    setup() {
        
    },
    components: { WhiteVerticalCard, Button, GrayCard },
    name: 'RegisterContactInfo'
})
</script>

<style lang="scss" scoped>
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
</style>
