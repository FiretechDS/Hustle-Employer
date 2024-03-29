import { JobOffer } from "../domain/JobOffer";
import { Skill } from "../../skills/domain/Skill";
import { jobPresentationProps } from "./JobPresentationModel";


export class ToPresentationMapper {
  static map(jobOffer:JobOffer):jobPresentationProps{
    const mapped:jobPresentationProps = {
      id:jobOffer.idValue,
      employerId:jobOffer.employer,
      title: jobOffer.header.title,
      specialRequirements: jobOffer.header.specialRequirements,
      duration:jobOffer.duration.value,
      creationDate:jobOffer.deadline.createdAt.toDateString(),
      deadline:jobOffer.deadline.value.toDateString(),
      skills:jobOffer.skills.map((skill:Skill)=>{
        return {name:skill.name, category:skill.category, number:skill.number }
      }),
      status: jobOffer.status.statusName,
      hourlyRate:jobOffer.hourlyRate.value,
      schedules: jobOffer.schedules.ToString(),
      location:jobOffer.location.value,
      startHour:jobOffer.schedules.startHour,
      endHour:jobOffer.schedules.endHour,
      latitude:jobOffer.position.latitude,
      longitude:jobOffer.position.longitude
    } 
   return mapped
  }
}