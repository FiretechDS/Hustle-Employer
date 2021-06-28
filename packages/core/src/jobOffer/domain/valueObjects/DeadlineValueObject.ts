
import { ValueObject } from "../../../common/domain/ValueObject";

interface DeadlineProps{
  value:Date
}

export class Deadline extends ValueObject<DeadlineProps>{
  public readonly value:Date; 
  
  private constructor (props: DeadlineProps){
    super(props);

    this.value=props.value;
  }

  public static create(deadline:Date):Deadline{
    const currentDate = new Date()
    if (deadline<currentDate){
      throw new Error(`Deadline date must be newer than current date: ${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`)
      
    }else{ 
      return new Deadline({
        value:deadline 
      }) 
    }
  }

}