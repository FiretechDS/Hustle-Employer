import { Entity } from "../../common/domain/Entity";
import { AddressEmployer } from "./valueObjects/AddressValueObject";
import { EmployerContact } from "./valueObjects/ContactValueObject";
import { EmployerProfile } from "./valueObjects/CompanyProfileValueObject";
import { IdentifierEmployer } from "./valueObjects/IdentifiersValueObject";
import { Skill } from "../../skills/domain/Skill";

export interface RegisterProps{
    addressEmployer: AddressEmployer,
    employerContacts:EmployerContact[],
    employerProfile: EmployerProfile,
    identifierEmployer: IdentifierEmployer,
    skills: Skill[]
}

export class Profile extends Entity<RegisterProps>{
    get addressEmployer(){
        return this.props.addressEmployer;
    }
    get employerContact(){
        return this.props.employerContacts;
    }
    get employerProfile(){
        return this.props.employerProfile;
    }
    get identifierEmployer(){
        return this.props.identifierEmployer;
    }
    get skills(){
        return this.props.skills;
    }
    get idValue(){
        return this.id
    }

    private constructor(props:RegisterProps, id?: number){
        super(props, id)
    }

    public static registerEmployer(props: RegisterProps):Profile{
        return new Profile(props);
    }

}