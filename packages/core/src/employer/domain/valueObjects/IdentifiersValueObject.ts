import { ValueObject } from "../../../common/domain/ValueObject";

interface IdentifierProps{
    email: string,
    password: string
}

export class IdentifierEmployer extends ValueObject<IdentifierProps>{
    readonly email: string;
    readonly password: string;

    private constructor(props:IdentifierProps){
        super(props);
        this.email = props.email;
        this.password = props.password;
    }

    public static create(email: string, password: string):IdentifierEmployer{
        if (email.trim()===''){
            throw new Error("Email can't be blank")
        }
        if (password.trim()===''){
            throw new Error("Password can't be blank")
        }
        return new IdentifierEmployer({email: email, password:password})
    }
}
