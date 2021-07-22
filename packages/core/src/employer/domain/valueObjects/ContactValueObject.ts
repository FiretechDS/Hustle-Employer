import { ValueObject } from "../../../common/domain/ValueObject";

interface ContactInfoProps{
    id: number,
    firstName: string,
    lastName: string,
    jobTitle: string,
    phoneNumber: number,   //Revisar el beta del +58
    email: string
}

export class EmployerContact extends ValueObject<ContactInfoProps>{
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly jobTitle: string;
    readonly phoneNumber: number; //validar por el +58 or kinda
    readonly email: string;

    private constructor(props:ContactInfoProps){
        super(props);
        this.id = props.id;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.jobTitle = props.jobTitle;
        this.phoneNumber = props.phoneNumber;
        this.email = props.email;
    }

    public static create(id:number, firstName:string, lastName:string, jobTitle:string, phoneNumber:number, email:string){
        if (firstName.trim()===''){
            throw new Error("First name can't be blank")
        }
        if (lastName.trim()===''){
            throw new Error("Last name can't be blank")
        }
        if (jobTitle.trim()===''){
            throw new Error("Job title can't be blank")
        }
        if (email.trim()===''){
            throw new Error("Email can't be blank")
        }

        return new EmployerContact({firstName:firstName, lastName:lastName, jobTitle:jobTitle, email:email, phoneNumber:phoneNumber, id:id})
    }

}