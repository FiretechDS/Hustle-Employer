import { ValueObject } from "../../../common/domain/ValueObject";

interface HeaderProps{
  title:string,
  specialRequirements:string
}

export class JobHeader extends ValueObject<HeaderProps>{
  readonly title:string;
  readonly specialRequirements:string;

  private constructor(props:HeaderProps){
    super(props);
    this.title=props.title;
    this.specialRequirements=props.specialRequirements;
  }

  public static create(title:string,specialRequirements?:string ):JobHeader{

    if(title.trim()===''){
      throw new Error("Title can't be blank")
    }
    if(!specialRequirements|| specialRequirements.trim()===''){
      specialRequirements='None.'
    }
    return new JobHeader({title:title, specialRequirements:specialRequirements } )
  }
}