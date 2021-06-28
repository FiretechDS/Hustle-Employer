
import { ValueObject } from "../../../common/domain/ValueObject";

interface HourlyRateProps{
  value: number,
}


 export class HourlyRate extends ValueObject<HourlyRateProps> {
  public readonly value: number;

  private constructor(props:HourlyRateProps){
    super(props);
    this.value=props.value;
  }

  public static create(hourlyRate:number ):HourlyRate {
    if(hourlyRate<=0){
      throw new Error('Hourly rate payment must be grater than zero') 
    }
    return  new HourlyRate({
      value: hourlyRate
    })
  }

  public calculatePayment(totalHours:number ):number{
    if (totalHours<=0){
      return 0;
    }
    return this.value*totalHours;
  }

 }