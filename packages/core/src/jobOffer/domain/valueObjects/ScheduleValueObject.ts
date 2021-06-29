import { Set } from "typescript";
import { ValueObject } from "../../../common/domain/ValueObject";

type days ='monday'|'tuesday'|'wednesday'|'thursday'|'friday'|'saturday'
interface scheduleProps{
  days:Set<days>
}
const regExp:RegExp = /^(monday|tuesday|wednesday|thursday|friday|saturday)$/

export class Schedule extends ValueObject<scheduleProps>{
  public readonly days: Set<days>
  
  private constructor(props:scheduleProps){
    super(props);
    this.days=props.days
  }

  public static create(daysProps:String[]){
    const daySet= new Set();
    daysProps.forEach((day:String)=>{
      if (day.toLowerCase().match(regExp)){
        daySet.add(day.toLowerCase());
      }else{
        throw new Error(`Schedule day "${day}" must be a valid day (monday,tuesday,wednesday...)`)
      }
      
    } )

    return new Schedule({days:daySet as Set<days>} )
  }

  public ToString(){
    const stringSet : String[] = []
    this.days.forEach((day:days)=>{
      stringSet.push(day)
    })
    return stringSet;
  }

  public static createList(dayPropsLists:String[][] ):Schedule[]{
    const scheduleList:Schedule[] = [];
    dayPropsLists.forEach((dayList:String[])=>{
      const schedule = this.create(dayList)
      scheduleList.push(schedule)
    })
    return scheduleList;
  }

}