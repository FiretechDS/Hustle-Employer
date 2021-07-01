import { JobOffersWeb } from "../../adapter/OfferWebModel";
import { jobPresentationProps } from "../../domain/JobDomainMapper";

export type JobApplicationProps = jobPresentationProps & {id:number}

export class ToApplicationMapper{
  static map(props:JobOffersWeb):JobApplicationProps{
    return {
      deadline:props.deadline,
      duration:props.duration,
      title:props.title,
      specialRequirements:props.specialRequirements,
      status: props.statusJobOfferModel.id,
      location:props.location,
      skills:props.skillModel.map((skill)=>{
        return {name:skill.habilityName, category:skill.skillCategoryModel.nameCategory }
      } ),
      schedules:props.scheduleModel,
      hourlyRate:props.hourlyRate,
      id:props.id

    }
  }
}