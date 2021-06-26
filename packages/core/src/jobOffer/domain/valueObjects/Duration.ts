import { Either } from "../../../common/domain/Either";
import { ValueObject } from "../../../common/domain/ValueObject";

interface durationProps{
  value:number
}

interface DurationError{
  message:string
}

export class Duration extends ValueObject<durationProps>{
  public readonly value:number;

  private constructor (props: durationProps){
    super(props);
    this.value= props.value;
  }
  
  public static create(duration:number): Either<DurationError, Duration>{
    if (duration<=0){
      return Either.left({
        message:'Job duration must be greater than zero'
      })


    }
      return Either.right( new Duration({value:duration}) )
  }

}