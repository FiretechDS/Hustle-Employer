import { ValueObject } from "../../../common/domain/ValueObject";

interface CompanyProfileProps{
    companyName: string,
    logoURL: string
}

export class EmployerProfile extends ValueObject<CompanyProfileProps>{
    readonly companyName: string;
    readonly logoURL: string;

    private constructor(props:CompanyProfileProps){
        super(props);
        this.companyName = props.companyName;
        this.logoURL = props.logoURL;
    }

    public static create(companyName:string, logoURL?:string){
        if (companyName.trim()===''){
            throw new Error("Company name can't be blank")
        }
        //https://stackoverflow.com/questions/46370725/how-to-do-email-validation-using-regular-expression-in-typescript
        if(!logoURL|| logoURL.trim()===''){
            logoURL='No logo'
        }

        return new EmployerProfile({companyName: companyName, logoURL: logoURL})
    }
}