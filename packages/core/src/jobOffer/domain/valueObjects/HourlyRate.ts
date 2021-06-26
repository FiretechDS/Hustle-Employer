import { Either } from "../../../common/domain/Either";
import { ValueObject } from "../../../common/domain/ValueObject";

interface HourlyRateProps{
  value: number,
}
 interface HourlyRateError{
   message:string
 }

 export class HourlyRate extends ValueObject<HourlyRateProps> {
  public readonly value: number;

  private constructor(props:HourlyRateProps){
    super(props);
    this.value=props.value;
  }

  public static create(hourlyRate:number ):Either<HourlyRateError,HourlyRate> {
    if(hourlyRate<=0){
      return Either.left({message:'Hourly rate payment must be grater than zero'}) 
    }
    return Either.right( new HourlyRate({
      value: hourlyRate
    }))
  }

  public calculatePayment(totalHours:number ):number{
    if (totalHours<=0){
      return 0;
    }
    return this.value*totalHours;
  }

 }