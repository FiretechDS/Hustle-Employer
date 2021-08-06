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
        if(password.toString().length<=8){
            throw new Error("Password should have at least 8 characters")
        }

        const passwordRegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (!passwordRegExp.test(password)){
            throw new Error("Password must contain at least 1 lowercase, 1 uppercase, 1 number, 1 special character and at least 8 characters long")
        }

        const emailRegExp = new RegExp(/^(([^<>()[\]{}'^?\\.,!|//#%*-+=&;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
        if (!emailRegExp.test(email)){
            throw new Error("Invalid email")
        }
        
        return new IdentifierEmployer({email: email, password:password})
    }
}
