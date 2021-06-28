import { JobOffer } from "../domain/JobOffer";

import { jobPresentationProps } from "../domain/JobDomainMapper";
import { Skill } from "../domain/valueObjects/SkillValueObject";


export class JobPresentationMapper {
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
      payment:jobOffer.hourlyRate.value
    } 
   return mapped
  }
}