import { JobOffersWeb } from "./OfferWebModel";
import { JobApplicationProps } from "../application/JobApplicationModel";
import { Skill } from "../../skills/domain/Skill";


export class InfraToApplicationMapper{
  static map(props:JobOffersWeb):JobApplicationProps{
    return {
      ...props,
      deadline:new Date(props.deadline),
      creationDate:new Date(props.createdOn), 
      status: props.statusJobOfferModel.id-1,
      latitude:parseFloat(props.latitude),
      longitude:parseFloat(props.length),
      skills:props.skillModel.map((skill)=>{
        return {name:skill.habilityName, category: Skill.getNumber( skill.skillCategoryModel.nameCategory),number:skill.id }
      } ),
      schedules:props.scheduleModel.map((schedule)=>{return schedule.day}),
      startHour:props.scheduleModel[0].startHour,
      endHour:props.scheduleModel[0].endHour
    }
  }
}