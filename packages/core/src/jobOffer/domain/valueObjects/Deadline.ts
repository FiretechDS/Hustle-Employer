import { Either } from "../../../common/domain/Either";
import { ValueObject } from "../../../common/domain/ValueObject";

interface DateError{
  message:string,
}

interface DeadlineProps{
  value: Date;
}
export class Deadline extends ValueObject<DeadlineProps>{
  public readonly value: Date;
  
  private constructor (props: DeadlineProps){
    super(props);

    this.value=props.value;
  }

  public static create(date: Date ):Either<DateError,Deadline>{
    if (date< new Date()){
      return Either.left(
        { message:'Deadline date must be newer than current date'}
      )
    }
    return Either.right(new Deadline({
      value:date
    }) )

  }

}