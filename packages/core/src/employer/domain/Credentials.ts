import { Entity } from "../../common/domain/Entity";
import { IdentifierEmployer } from "./valueObjects/IdentifiersValueObject";

export interface LoginProps{
    identifierEmployer: IdentifierEmployer,
    id?: number
}

export class Credentials extends Entity<LoginProps>{
    get identifierEmployer(){
        return this.props.identifierEmployer;
    }
    get idValue(){
        return this.id
    }
    
    private constructor(props:LoginProps, id?:number){
        super(props,id)
    }

    public static loginEmployer(props: LoginProps, id?:number):Credentials{
        return new Credentials(props,id);
    }

}