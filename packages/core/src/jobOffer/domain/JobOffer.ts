import { Entity } from "../../common/domain/Entity";
import { Deadline } from "./valueObjects/DeadlineValueObject";
import { Duration } from "./valueObjects/DurationValueObject";
import { JobHeader } from "./valueObjects/HeaderValueObject";
import { HourlyRate } from "./valueObjects/HourlyRateValueObject";
import { Location } from "./valueObjects/LocationValueObject";
import { Schedule } from "./valueObjects/ScheduleValueObject";
import { Skill } from "../../skills/domain/Skill";
import { Status } from "./valueObjects/StatusValueObject";
import { Position } from "./valueObjects/PositionValueObject";

export interface JobOfferProps{
  deadline:Deadline;
  hourlyRate:HourlyRate;
  duration:Duration;
  header:JobHeader;
  status:Status;
  skills: Skill[];
  schedules:Schedule;
  location:Location;
  employerId:number,
  position:Position
}

export class JobOffer extends Entity<JobOfferProps>{
  get deadline(){
    return this.props.deadline; 
  }
  get hourlyRate(){
    return this.props.hourlyRate;
  }
  get duration(){
    return this.props.duration;
  }
  get header(){
    return this.props.header;
  }
  get status(){
    return this.props.status;
  }
  get skills(){
    return this.props.skills;
  }
  get schedules(){
    return this.props.schedules;
  }
  get location(){
    return this.props.location;
  }
  get employer(){
    return this.props.employerId;
  }
  get position(){
    return this.props.position
  }
  public get idValue():number{
    return this.id
  }
  private constructor(props:JobOfferProps, id?:number){
    super(props,id);
  }

  public static createJobOffer(props:JobOfferProps, id?:number):JobOffer{
    return new JobOffer(props,id);
  }

}