import { ProfileProps, ProfileToDomainMapper } from "../domain/EmployerDomainMapper";
import { ProfileWebModel, ProfileCreateDto } from "./ProfileWebModel";
export class ApplicationToInfraMapper{
    static map (profile:ProfileProps):ProfileCreateDto{
        return{
            ...profile,
            companyName: profile.companyName,
            specialRequirement: 'none',
            email: profile.email,
            password: profile.password,
            listContact: profile.contacts.map(contact=>{
                return{fullName:contact.firstName+' '+contact.lastName,phoneNumber:contact.phoneNumber.toString(),email:contact.email,jobTitle:contact.email}
            }),
            listSkill: profile.skills.map(skill =>{
                return skill.number
            })
        }
    }
}