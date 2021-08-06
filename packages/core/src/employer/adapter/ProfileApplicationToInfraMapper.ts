import { ProfileProps, ProfileToDomainMapper } from "../domain/EmployerDomainMapper";
import { ProfileWebModel, ProfileCreateDto } from "./ProfileWebModel";
export class ApplicationToInfraMapper{
    static map (profile:ProfileProps):ProfileCreateDto{
        return{
            ...profile,
            companyName: profile.companyName,
            companyLogo:profile.logoURL,
            specialRequirement: 'none',
            email: profile.email,
            password: profile.password,
            createAddressCommand:{city:profile.city,street1:profile.firstLineAddress,street2:profile.secondLineAddress,state:profile.state,zip: profile.zip.toString()},
            listContact: profile.contacts.map(contact=>{
                return{fullName:contact.firstName+' '+contact.lastName,phoneNumber:contact.phoneNumber.toString(),email:contact.email,jobTitle:contact.jobTitle}
            }),
            listSkill: profile.skills.map(skill =>{
                return skill.number
            })
        }
    }
}