import { Entity } from "../../common/domain/Entity";
import { AddressEmployer } from "./valueObjects/AddressValueObject";
import { EmployerContact } from "./valueObjects/ContactValueObject";
import { EmployerProfile } from "./valueObjects/CompanyProfileValueObject";
import { IdentifierEmployer } from "./valueObjects/IdentifiersValueObject";

export interface RegisterProps{
    addressEmployer: AddressEmployer,
    employerContact: Array<EmployerContact>,
    employerProfile: EmployerProfile,
    identifierEmployer: IdentifierEmployer
}

export class Profile extends Entity<RegisterProps>{
    get addressEmployer(){
        return this.props.addressEmployer;
    }
    get employerContact(){
        return this.props.employerContact;
    }
    get employerProfile(){
        return this.props.employerProfile;
    }
    get identifierEmployer(){
        return this.props.identifierEmployer;
    }

    private constructor(props:RegisterProps, id?:number){
        super(props,id)
    }

    public static registerEmployer(props: RegisterProps, id?:number):Profile{
        return new Profile(props,id);
    }

}