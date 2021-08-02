import { Profile } from "../domain/Profile";
import { Skill } from "../../skills/domain/Skill";
import { profilePresentationProps } from "./EmployerPresentationModel";
import { EmployerContact } from "../domain/valueObjects/ContactValueObject";

export class ProfileToPresentationMapper {
    static map(profile:Profile):profilePresentationProps{
        const mapped:profilePresentationProps = {
            email: profile.identifierEmployer.email,
            password: profile.identifierEmployer.password,
            logoURL: profile.employerProfile.logoURL,
            companyName: profile.employerProfile.companyName,
            firstLineAddress: profile.addressEmployer.firstLineAddress,
            secondLineAddress: profile.addressEmployer.secondLineAddress,
            state: profile.addressEmployer.state,
            city: profile.addressEmployer.city,
            zip: profile.addressEmployer.zip,
            skills:profile.skills.map((skill:Skill)=>{
                return {name:skill.name, category:skill.category, number:skill.number }
            }),
            contacts:profile.employerContact,
            id: profile.idValue
        }
        return mapped
    }

}