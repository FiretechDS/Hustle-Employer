import { JobOffer } from "../domain/JobOffer";
import { Skill } from "../domain/valueObjects/SkillValueObject";
import { jobPresentationProps } from "./JobPresentationModel";


export class ToPresentationMapper {
  static map(jobOffer:JobOffer):jobPresentationProps{
    const mapped:jobPresentationProps = {
      title: jobOffer.header.title,
      specialRequirements: jobOffer.header.specialRequirements,
      duration:jobOffer.duration.value,
      deadline:jobOffer.deadline.value.toLocaleDateString(),
      skills:jobOffer.skills.map((skill:Skill)=>{
        return {name:skill.name, category:skill.category }
      }),
      status:jobOffer.status.statusName,
      hourlyRate:jobOffer.hourlyRate.value,
      schedules: jobOffer.schedules.ToString(),
      location:jobOffer.location.value,
      startHour:jobOffer.schedules.startHour,
      endHour:jobOffer.schedules.endHour,
    } 
   return mapped
  }
}