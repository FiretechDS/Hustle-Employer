import { JobOffer } from "./JobOffer";
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
  schedules: string[]|string[][],
  location:string 
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
        schedules: Array.isArray(props.schedules[0]) ? Schedule.createList(props.schedules as string[][] ): [Schedule.create(props.schedules as string[])],
        location:Location.create(props.location)
      },props.id)

    }
}