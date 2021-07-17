import { skillModel } from "../../skills/adapter/skillModel";

interface scheduleModel{
  id:number,
  day:string,
  startHour:number,
  endHour:number
}

export interface JobOffersWeb{
  id:number,
  employerId:number,
  title:string,
  location:string,
  deadline:string,
  specialRequirements:string,
  duration:number,
  hourlyRate:number,
  statusJobOfferModel:{
    id:number,
    description:string
  },
  skillModel: skillModel[],
  scheduleModel: scheduleModel[],
}

export type jobOfferCreateDto={
  [P in keyof JobOffersWeb]:P extends "scheduleModel"?JobOffersWeb[P]:  JobOffersWeb[P] extends Array<Object>?Array<number>:P extends "statusJobOfferModel"?number: P extends "id"?number: JobOffersWeb[P]
}