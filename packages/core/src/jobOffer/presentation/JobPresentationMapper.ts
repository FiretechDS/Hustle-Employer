import { JobOffer } from "../domain/JobOffer";
import { Skill } from "../domain/valueObjects/SkillValueObject";
import { Schedule } from "../domain/valueObjects/ScheduleValueObject";
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
      schedules: jobOffer.schedules.map((schedule:Schedule)=>{
        return schedule.ToString()
      }),
      location:jobOffer.location.value,
      startHour:jobOffer.startHour.value,
      endHour:jobOffer.endHour.value
    } 
   return mapped
  }
}