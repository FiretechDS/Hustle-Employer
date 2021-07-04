import { jobCreationProps } from "../domain/JobDomainMapper";
import { Schedule } from "../domain/valueObjects/ScheduleValueObject";
import { jobOfferCreateDto } from "./OfferWebModel";

export class ApplicationToInfraMapper{
  static map (offer: jobCreationProps ):jobOfferCreateDto{
    return{
      ...offer,
      id:1,
      deadline:offer.deadline.toLocaleDateString(),
      statusJobOfferModel:offer.status?offer.status:1,
      specialRequirements:offer.specialRequirements?offer.specialRequirements:'None.',
      skillModel: offer.skills.map(skill =>{
        return skill.number
      } ),
      scheduleModel:offer.schedules.map(schedule=>{
        return {startHour:offer.startHour?offer.startHour:9, endHour:offer.endHour?offer.endHour:17, day:schedule, id: Schedule.getDayNumber(schedule) }
      })
    }
  }
}