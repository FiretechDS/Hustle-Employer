import { Either } from "../../../common/domain/Either";
import { ValueObject } from "../../../common/domain/ValueObject";

interface HeaderProps{
  title:string,
  specialRequirements:string
}

interface HeaderError{
  message:string
}

export class JobHeader extends ValueObject<HeaderProps>{
  readonly title:string;
  readonly specialRequirements:string;

  private constructor(props:HeaderProps){
    super(props);
    this.title=props.title;
    this.specialRequirements=props.specialRequirements;
  }

  public static create(title:string,specialRequirements:string ):Either<HeaderError,JobHeader>{

    if(title===''){
      return Either.left({message:"Title can't be blank"})
    }
    if(specialRequirements===''){
      specialRequirements='Ninguno.'
    }
    return Either.right(new JobHeader({title:title, specialRequirements:specialRequirements } ))
  }
}