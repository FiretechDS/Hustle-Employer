import { JobOffersWeb } from "./OfferWebModel";
import { JobApplicationProps } from "../application/JobApplicationModel";


export class InfraToApplicationMapper{
  static map(props:JobOffersWeb):JobApplicationProps{
    return {
      ...props,
      status: props.statusJobOfferModel.id,
      skills:props.skillModel.map((skill)=>{
        return {name:skill.habilityName, category:skill.skillCategoryModel.nameCategory }
      } ),
      schedules:props.scheduleModel.map((schedule)=>{return schedule.day}),
      startHour:props.scheduleModel[0].startHour,
      endHour:props.scheduleModel[0].endHour

    }
  }
}