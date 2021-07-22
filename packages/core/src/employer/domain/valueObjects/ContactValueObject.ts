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

        //Number phone validation
        const phoneString = phoneNumber.toString();     //Para hacer las validaciones se usara el numero como string
        var firstDigit = phoneString.substr(0,1);       //Agarra el primer digito
        if (parseInt(firstDigit)===1){                  //US numbers empiezan por 1
            if(phoneString.substr(0).length!==10){      //Si el numero es 1, la longitud del resto del numero debe ser 10
                throw new Error("Invalid US Number")
            }
        }
        else{
            var twoDigits = phoneString.substr(0,2);
            if(parseInt(twoDigits)===58){               //Venezuelan numbers empiezan por +58
                if(phoneString.substr(0).length!==10){  //Si empiezan por +58 deben tener 10 numeros de longitud
                    throw new Error("Invalid Venezuelan Number")
                }
            }
        }

        return new EmployerContact({firstName:firstName, lastName:lastName, jobTitle:jobTitle, email:email, phoneNumber:phoneNumber, id:id})
    }

}