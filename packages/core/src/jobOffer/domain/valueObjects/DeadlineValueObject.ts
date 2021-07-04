
import { ValueObject } from "../../../common/domain/ValueObject";

interface DeadlineProps{
  value:Date,
  createdAt?:Date,
}

export class Deadline extends ValueObject<DeadlineProps>{
  public readonly value:Date; 
  public readonly createdAt:Date;
  private constructor (props: DeadlineProps){
    super(props);
    this.value=props.value;
    props.createdAt? this.createdAt=props.createdAt:this.createdAt=new Date() ;
  }

  public static create(deadline:Date,createdAt?:Date):Deadline{
    const currentDate:Date = new Date()
    if ((createdAt && createdAt>deadline)&&deadline<currentDate){
      throw new Error(`Deadline date "${deadline}" must be newer than current date: ${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`)
      
    }else{ 
      return new Deadline({
        value:deadline 
      }) 
    }
  }

}