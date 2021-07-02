interface skillModel{
  id:number,
  habilityName:string,
  skillCategoryModel:{
    id:number,
    nameCategory:string
  }
}
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
  deadline:Date,
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
