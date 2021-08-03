import { Profile } from "./Profile";
import { Credentials } from "./Credentials";
import { AddressEmployer } from "./valueObjects/AddressValueObject";
import { IdentifierEmployer } from "./valueObjects/IdentifiersValueObject";
import { contactMappedProps, EmployerContact } from "./valueObjects/ContactValueObject";
import { EmployerProfile } from "./valueObjects/CompanyProfileValueObject";
import { Skill, skillMappedProps } from "../../skills/domain/Skill";

export interface ProfileProps{
    id?: number,
    email: string,
    password: string,
    logoURL: string,
    companyName: string,
    skills:skillMappedProps[] , 
    firstLineAddress: string,
    secondLineAddress: string,
    state: string,
    city: string,
    zip: number,
    contacts: contactMappedProps[]
}

export type profileCreatedProps={
    [P in keyof ProfileProps]-?:ProfileProps[P]
}

export class ProfileToDomainMapper{
    static map(props:ProfileProps):Profile{
        return Profile.registerEmployer({
            identifierEmployer: IdentifierEmployer.create(props.email, props.password),
            employerContacts: EmployerContact.createList(props.contacts),   
            employerProfile: EmployerProfile.create(props.companyName, props.logoURL),
            addressEmployer: AddressEmployer.create(props.firstLineAddress, props.secondLineAddress,props.state, props.city, props.zip),
            skills: Skill.createList(props.skills)
        })
  
      }
}

export interface loginProps{
    id?: number,
    email: string,
    password: string
}

export type LoginCreatedProps={
    [P in keyof loginProps]-?:loginProps[P]
}

export class LoginToDomainMapper{
    static map(props:loginProps):Credentials{
        return Credentials.loginEmployer({
            identifierEmployer: IdentifierEmployer.create(props.email, props.password)
        })
      }
}