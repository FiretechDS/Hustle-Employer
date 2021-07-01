
/*
const newOffer:JobOfferProps={
  deadline: Deadline.create(new Date("2022-01-02")).fold( 
    error => return error.message,
    value=> return value
  )

};*/

import { ToDomainMapper } from "./JobDomainMapper";
import { ToPresentationMapper } from "../presentation/JobPresentationMapper";
import { Deadline } from "./valueObjects/DeadlineValueObject";
import { Duration } from "./valueObjects/DurationValueObject";
import { JobHeader } from "./valueObjects/HeaderValueObject";
import { Skill } from "./valueObjects/SkillValueObject";
import { Status, statuses } from "./valueObjects/StatusValueObject";
import { Schedule } from "./valueObjects/ScheduleValueObject";
import { OffersInMemoryRepository } from "../adapter/out/OffersInMemoryRepository";
import { loadOffersService } from "../application/services/LoadOffersService";
import { JobOfferPloc } from "../presentation";
import { PublishOfferService } from "../application/services/PublishOfferService";
import { OfferinMemoryPublisher } from "../adapter/out/OfferInMemoryPublisher";
try {
 // const line:Deadline = Deadline.create(new Date("2021-06-27"));
  //console.log(line.value); 
 // const status:Status = Status.create(5.5);
 // console.log(status)
  //console.log(status.statusName);
  const line:Date = new Date("2021-07-27");
  const status = 5.5;
  const hourlyRate = 200;
  const duration = 400;
  const title='New job'
  const skillProps = [{name:'Cook',category:'Technical'}, {name:'Clean',category:'soft'} ]
  const days =[['tuesday','monday'],['friday','monday']]
  const jobOffer = ToDomainMapper.map({deadline:line,status:status,hourlyRate:hourlyRate,duration:duration, title:title, skills: skillProps, schedules:days, location:'Albuquerque'})
  const mapped = ToPresentationMapper.map(jobOffer);




} catch (error) {
  console.log('Caught error: '+error.message)
}


async function load(){
  try {
    const repo = new OffersInMemoryRepository();
    const loadService = new loadOffersService(repo);
    const createService = new PublishOfferService(new OfferinMemoryPublisher())
    const ploc = new JobOfferPloc(loadService,createService );
    console.log(await loadService.load(1));
  } catch (error) {
    console.log(error)
  }

}
load();