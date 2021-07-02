import { Set } from "typescript";
import { ValueObject } from "../../../common/domain/ValueObject";

type days ='monday'|'tuesday'|'wednesday'|'thursday'|'friday'|'saturday'
const daysArray=['monday','tuesday','wednesday','thursday','friday','saturday']
interface scheduleProps{
  days:Set<days>,
  startHour: number,
  endHour: number
}
const regExp = /^(monday|tuesday|wednesday|thursday|friday|saturday)$/

export class Schedule extends ValueObject<scheduleProps>{
  public readonly days: Set<days>
  public readonly startHour: number
  public readonly endHour: number
  
  private constructor(props:scheduleProps){
    super(props);
    this.days=props.days
    this.startHour=props.startHour
    this.endHour=props.endHour
  }

  public static create(daysProps:string[], startHourProps: number, endHourProps: number){
    const daySet= new Set();
    daysProps.forEach((day:string)=>{
      if (day.toLowerCase().match(regExp)){
        daySet.add(day.toLowerCase());
      }else{
        throw new Error(`Schedule day "${day}" must be a valid day (monday,tuesday,wednesday...)`)
      }
      
    } )

    if ((startHourProps<0)||(startHourProps>24)||(endHourProps<0)||(endHourProps>24)){
      throw new Error(`Schedules hours must be a valid hour between 0-23`)
    }
    

    return new Schedule({days:daySet as Set<days>,startHour: startHourProps,endHour:endHourProps} )
  }

  public ToString(){
    const stringSet : string[] = []
    this.days.forEach((day:days)=>{
      stringSet.push(day)
    })
    return stringSet;
  }

  public static createList(dayPropsLists:string[][], startHourProps: number, endHourProps: number ):Schedule[]{
    const scheduleList:Schedule[] = [];
    dayPropsLists.forEach((dayList:string[])=>{
      const schedule = this.create(dayList,startHourProps,endHourProps)
      scheduleList.push(schedule)
    })
    return scheduleList;
  }

  public static getDayNumber(day:string):number{
    return daysArray.findIndex((value:string)=>{return day===value } )+1;
  }
}