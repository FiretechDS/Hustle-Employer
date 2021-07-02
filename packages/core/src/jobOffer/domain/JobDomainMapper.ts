import { JobOffer, JobOfferProps } from "./JobOffer";
import { Deadline } from "./valueObjects/DeadlineValueObject";
import { Duration } from "./valueObjects/DurationValueObject";
import { JobHeader } from "./valueObjects/HeaderValueObject";
import { HourlyRate } from "./valueObjects/HourlyRateValueObject";
import { Location } from "./valueObjects/LocationValueObject";
import { Schedule } from "./valueObjects/ScheduleValueObject";
import { Skill, stringSkillProps } from "./valueObjects/SkillValueObject";
import { Status } from "./valueObjects/StatusValueObject";

export interface jobCreationProps{
  
  id?:number,
  deadline:Date,
  duration:number,
  title:string,
  specialRequirements?:string,
  skills:stringSkillProps[] ,
  status:number,
  hourlyRate: number,
  schedules: string[],
  location:string,
  startHour: number,
  endHour: number
}

export class ToDomainMapper{
  static map(props:jobCreationProps):JobOffer{
      return JobOffer.createJobOffer({
        deadline: Deadline.create(props.deadline),
        duration: Duration.create(props.duration),
        header:JobHeader.create(props.title,props.specialRequirements),
        status: Status.create(props.status),
        skills: Skill.createList(props.skills),
        hourlyRate:HourlyRate.create(props.hourlyRate),
        schedules: Schedule.create(props.schedules as string[],props.startHour,props.endHour),
        location:Location.create(props.location)
      },props.id)

    }
}