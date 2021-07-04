import { ValueObject } from "../../../common/domain/ValueObject";

interface durationProps{
  value:number,
  type?:string,

}


export class Duration extends ValueObject<durationProps>{
  public readonly value:number;
  public readonly type: string;
  private constructor (props: durationProps){
    super(props);
    this.value= props.value;
    props.type? this.type = props.type
    :this.type="hours" 
  }
  
  public static create(duration:number, type?:string): Duration{
    if (duration<=0){
      throw  new Error('Job duration must be greater than zero')
    } 
      return new Duration({value:duration,type:type});
  }

  public toDays():Duration{
    return new Duration({value:this.value/24, type:'days' })
  }
}