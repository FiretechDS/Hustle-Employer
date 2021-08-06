import { JobOffer } from "./JobOffer";
import { Deadline } from "./valueObjects/DeadlineValueObject";
import { Duration } from "./valueObjects/DurationValueObject";
import { JobHeader } from "./valueObjects/HeaderValueObject";
import { HourlyRate } from "./valueObjects/HourlyRateValueObject";
import { Location } from "./valueObjects/LocationValueObject";
import { Schedule } from "./valueObjects/ScheduleValueObject";
import { Skill, skillMappedProps } from "../../skills/domain/Skill";
import { Status } from "./valueObjects/StatusValueObject";
import { Position } from "./valueObjects/PositionValueObject";

export interface jobCreationProps{
  
  id?:number,
  deadline:Date,
  creationDate?:Date,
  duration:number,
  title:string,
  specialRequirements?:string,
  skills:skillMappedProps[] ,
  status:number,
  hourlyRate: number,
  schedules: string[],
  location:string,
  startHour?: number,
  endHour?: number,
  employerId:number,
  latitude:number,
  longitude:number,
}

export type jobCreatedProps={
  [P in keyof jobCreationProps]-?:jobCreationProps[P]
}

export class ToDomainMapper{
  static map(props:jobCreationProps):JobOffer{
      return JobOffer.createJobOffer({
        deadline: Deadline.create(props.deadline,props.creationDate),
        duration: Duration.create(props.duration),
        header:JobHeader.create(props.title,props.specialRequirements),
        status: Status.create(props.status),
        skills: Skill.createList(props.skills),
        hourlyRate:HourlyRate.create(props.hourlyRate),
        schedules: Schedule.create(props.schedules as string[],props.startHour,props.endHour),
        location:Location.create(props.location),
        employerId:props.employerId,
        position:Position.create(props.latitude,props.longitude)
      },props.id)

    }
}