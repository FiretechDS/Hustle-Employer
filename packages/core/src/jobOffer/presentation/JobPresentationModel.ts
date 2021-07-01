import { stringSkillProps } from "../domain/valueObjects/SkillValueObject";

export interface jobPresentationProps{
  id?:number,
  deadline:string,
  duration:number,
  title:string,
  specialRequirements?:string,
  skills:stringSkillProps[] ,
  status:string,
  hourlyRate: number,
  schedules: string[]|string[][],
  location:string ,
  startHour: number,
  endHour: number
}
