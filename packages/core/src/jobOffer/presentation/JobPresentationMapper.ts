import { JobOffer } from "../domain/JobOffer";

import { jobPresentationProps } from "../domain/JobDomainMapper";
import { Skill } from "../domain/valueObjects/SkillValueObject";
import { Schedule } from "../domain/valueObjects/ScheduleValueObject";


export class ToPresentationMapper {
  static map(jobOffer:JobOffer):jobPresentationProps{
    const mapped:jobPresentationProps = {
      title: jobOffer.header.title,
      specialRequirements: jobOffer.header.specialRequirements,
      duration:jobOffer.duration.value,
      deadline:jobOffer.deadline.value,
      skills:jobOffer.skills.map((skill:Skill)=>{
        return {name:skill.name, category:skill.category }
      }),
      status:jobOffer.status.value,
      hourlyRate:jobOffer.hourlyRate.value,
      schedules: jobOffer.schedules.map((schedule:Schedule)=>{
        return schedule.ToString()
      }),
      location:jobOffer.location.value 
    } 
   return mapped
  }
}