import { JobOffer } from "./JobOffer";
import { Deadline } from "./valueObjects/DeadlineValueObject";
import { Duration } from "./valueObjects/DurationValueObject";
import { JobHeader } from "./valueObjects/HeaderValueObject";
import { HourlyRate } from "./valueObjects/HourlyRateValueObject";
import { Schedule } from "./valueObjects/ScheduleValueObject";
import { Skill, stringSkillProps } from "./valueObjects/SkillValueObject";
import { Status } from "./valueObjects/StatusValueObject";

export interface jobPresentationProps{
  deadline:Date,
  duration:number,
  title:string,
  specialRequirements?:string,
  skills:stringSkillProps[] ,
  status:number,
  hourlyRate: number,
  schedules: String[]|String[][]
}

export class ToDomainMapper{
  static map(props:jobPresentationProps):JobOffer{
      return JobOffer.createJobOffer({
        deadline: Deadline.create(props.deadline),
        duration: Duration.create(props.duration),
        header:JobHeader.create(props.title,props.specialRequirements),
        status: Status.create(props.status),
        skills: Skill.createList(props.skills),
        hourlyRate:HourlyRate.create(props.hourlyRate),
        schedules: Array.isArray(props.schedules[0]) ? Schedule.createList(props.schedules as String[][] ): [Schedule.create(props.schedules as String[])]
      })

    }
}