
/*
const newOffer:JobOfferProps={
  deadline: Deadline.create(new Date("2022-01-02")).fold( 
    error => return error.message,
    value=> return value
  )

};*/

import { jobCreationProps, ToDomainMapper } from "./JobDomainMapper";
import { ToPresentationMapper } from "../presentation/JobPresentationMapper";
import { Deadline } from "./valueObjects/DeadlineValueObject";
import { Duration } from "./valueObjects/DurationValueObject";
import { JobHeader } from "./valueObjects/HeaderValueObject";
import { Skill } from "./valueObjects/SkillValueObject";
import { Status, statuses } from "./valueObjects/StatusValueObject";
import { Schedule } from "./valueObjects/ScheduleValueObject";
import { OffersInMemoryRepository } from "../adapter/out/OffersInMemoryRepository";
import { JobOfferPloc } from "../presentation";
import { PublishOfferService } from "../application/services/PublishOfferService";
import { OfferinMemoryPublisher } from "../adapter/out/OfferInMemoryPublisher";
import { LoadOffersService } from "../application/services/LoadOffersService";
import { OffersAPIRepository } from "../adapter/out/OffersAPIRepository";
import { ApplicationToInfraMapper } from "../adapter/JobApplicationToInfraMapper";
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

  console.log(Schedule.getDayNumber('sunday'))
  const offer:jobCreationProps={
    deadline:new Date('2022-01-02'),
    creationDate: new Date(),
    employerId:100,
    duration:500,
    schedules:['monday','tuesday'],
    startHour:6,
    endHour:14,
    status:1,
    skills:[{name:'Java',number:1,category:1}],
    title:'UI/UX Developer',
    hourlyRate:400,
    location:'Los Angeles'

  }
  const mappedOffer = ApplicationToInfraMapper.map(offer)
  const offerDto ={...mappedOffer, EmployerId:mappedOffer.employerId, statusJobOfferModelId:mappedOffer.statusJobOfferModel}
  
 // console.log(offerDto)
  console.log(Deadline.create(new Date('1997-01-01')))

} catch (error) {
  console.log('Caught error: '+error.message)
}


 async function load(){
  try {
    const repo = new OffersAPIRepository();
    const loadService = new LoadOffersService(repo);
    const createService = new PublishOfferService(new OfferinMemoryPublisher())
    const ploc = new JobOfferPloc(loadService,createService );
    ploc.state.kind==='ErrorOfferState'&& console.log(ploc.state.reason  );
    const result =await repo.loadOffers(2);
    result.fold( 
      (error)=>{ console.log(error)}
    ,(jobs)=>{console.log(jobs) })
  } catch (error) {
    console.log(error.message)
  }
  

}
