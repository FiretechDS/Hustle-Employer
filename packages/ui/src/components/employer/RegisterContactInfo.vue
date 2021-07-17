<template>
    <WhiteVerticalCard>
        <template v-slot:header>Employer Register</template>
        <template v-slot:body>
            <div class="content-register-contact">
                <p class="subtitle-register">Contacts</p>
                <GrayCard> 
                    <template v-slot:body>
                        <ul class="details-contact-register">
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
                <GrayCard>
                    <template v-slot:body>
                        <div class="icon tooltip">
                            <img
                                class="cardIconsContactPlus "
                                @click.stop
                                :src="require('@/assets/svg/plus-flat.svg')"
                            />
                            </div>
                    </template> 
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
  width: 2rem;
  height: 2rem;
  filter: $filter-blue;
  padding: 0.5rem;
  filter: $filter-dark;
}
</style>
