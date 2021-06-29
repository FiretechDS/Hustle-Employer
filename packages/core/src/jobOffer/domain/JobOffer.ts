import { Entity } from "../../common/domain/Entity";
import { Deadline } from "./valueObjects/DeadlineValueObject";
import { Duration } from "./valueObjects/DurationValueObject";
import { JobHeader } from "./valueObjects/HeaderValueObject";
import { HourlyRate } from "./valueObjects/HourlyRateValueObject";
import { Schedule } from "./valueObjects/ScheduleValueObject";
import { Skill } from "./valueObjects/SkillValueObject";
import { Status } from "./valueObjects/StatusValueObject";

export interface JobOfferProps{
  deadline:Deadline;
  hourlyRate:HourlyRate;
  duration:Duration;
  header:JobHeader;
  status:Status;
  skills:Skill[];
  schedules:Schedule[];
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
  private constructor(props:JobOfferProps){
    super(props);
  }

  public static createJobOffer(props:JobOfferProps):JobOffer{
    return new JobOffer(props);
  }

}