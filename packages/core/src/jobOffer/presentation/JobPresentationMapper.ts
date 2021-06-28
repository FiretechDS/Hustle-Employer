import { JobOffer } from "../domain/JobOffer";

import { jobPresentationProps } from "../domain/JobDomainMapper";


export class JobPresentationMapper {
  static map(jobOffer:JobOffer):jobPresentationProps{
    const mapped:jobPresentationProps = {
      title: jobOffer.header.title,
      specialRequirements: jobOffer.header.specialRequirements,
      duration:jobOffer.duration.value,
      deadline:jobOffer.deadline.value,
      skills:jobOffer.skills.map(skill=>{
        return {name:skill.name, category:skill.category }
      }),
      status:jobOffer.status.value,
      payment:jobOffer.hourlyRate.value
    } 
   return mapped
  }
}