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
    companyLogo:string,
    specialRequirement: string,
    password: string,
    email: string,
    listSkill:skillModel[],
    listContact:Contact[],
    createAddressCommand:Address
}
type id = {id:number}
type registeredContact = Contact & id
export interface ProfileWebResponse{
    companyName: string,
    companyLogo:string,
    specialRequirement: string,
    status:string,
    skillModelList:skillModel[],
    contactEntityList:registeredContact[],
    addressResponse:Address
}

export type ProfileCreateDto={
    [P in keyof ProfileWebModel]:P extends "listContact"?Array<Object>: ProfileWebModel[P] extends Array<Object>?Array<number>:P extends "id"?number: ProfileWebModel[P]
}