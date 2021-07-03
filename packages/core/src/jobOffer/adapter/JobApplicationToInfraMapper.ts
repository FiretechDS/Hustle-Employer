import { JobApplicationProps } from "../application/JobApplicationModel";
import { jobCreationProps } from "../domain/JobDomainMapper";
import { Schedule } from "../domain/valueObjects/ScheduleValueObject";
import { jobOfferCreateDto } from "./OfferWebModel";

export class ApplicationToInfraMapper{
  static map (offer: jobCreationProps ):jobOfferCreateDto{
    return{
      ...offer,
      id:undefined,
      statusJobOfferModel:offer.status?offer.status:1,
      specialRequirements:offer.specialRequirements?offer.specialRequirements:'None.',
      skillModel: offer.skills.map(skill =>{
        return skill.number
      } ),
      scheduleModel:offer.schedules.map(schedule=>{
        return {startHour:offer.startHour, endHour:offer.endHour, day:schedule, id: Schedule.getDayNumber(schedule) }
      })
    }
  }
}