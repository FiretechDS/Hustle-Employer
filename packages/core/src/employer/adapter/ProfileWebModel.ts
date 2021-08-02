import { skillModel } from "../../skills/adapter/skillModel";

interface Contact{
    fullName: string,
    jobTitle: string,
    phoneNumber: string,
    email: string
}

interface Address{
    street1: string,
    street2: string,
    city: string,
    state:string,
    zip: string
}

export interface ProfileWebModel{
    companyName: string,
    specialRequirement: string,
    password: string,
    email: string,
    listSkill:skillModel[],
    listContact:Contact[],
    createAddressCommand:Address
}

export type ProfileCreateDto={
    [P in keyof ProfileWebModel]:P extends "listContact"?Array<Object>: ProfileWebModel[P] extends Array<Object>?Array<number>:P extends "id"?number: ProfileWebModel[P]
}