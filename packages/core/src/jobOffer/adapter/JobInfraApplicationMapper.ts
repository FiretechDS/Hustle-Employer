import { JobOffersWeb } from "./OfferWebModel";
import { JobApplicationProps } from "../application/JobApplicationModel";
import { Skill } from "../domain/valueObjects/SkillValueObject";


export class InfraToApplicationMapper{
  static map(props:JobOffersWeb):JobApplicationProps{
    return {
      ...props,
      status: props.statusJobOfferModel.id,
      skills:props.skillModel.map((skill)=>{
        return {name:skill.habilityName, category: Skill.getNumber( skill.skillCategoryModel.nameCategory),number:skill.id }
      } ),
      schedules:props.scheduleModel.map((schedule)=>{return schedule.day}),
      startHour:props.scheduleModel[0].startHour,
      endHour:props.scheduleModel[0].endHour
    }
  }
}