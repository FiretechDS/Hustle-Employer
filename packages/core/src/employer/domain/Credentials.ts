import { Entity } from "../../common/domain/Entity";
import { IdentifierEmployer } from "./valueObjects/IdentifiersValueObject";

export interface LoginProps{
    identifierEmployer: IdentifierEmployer
}

export class Credentials extends Entity<LoginProps>{
    get identifierEmployer(){
        return this.props.identifierEmployer;
    }

    private constructor(props:LoginProps, id?:number){
        super(props,id)
    }

    public static registerEmployer(props: LoginProps, id?:number):Credentials{
        return new Credentials(props,id);
    }

}