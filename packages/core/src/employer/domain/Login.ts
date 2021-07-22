import { Entity } from "../../common/domain/Entity";
import { IdentifierEmployer } from "./valueObjects/IdentifiersValueObject";

export interface LoginProps{
    identifierEmployer: IdentifierEmployer
}

export class Login extends Entity<LoginProps>{
    get identifierEmployer(){
        return this.props.identifierEmployer;
    }

    private constructor(props:LoginProps, id?:number){
        super(props,id)
    }

    public static registerEmployer(props: LoginProps, id?:number):Login{
        return new Login(props,id);
    }

}