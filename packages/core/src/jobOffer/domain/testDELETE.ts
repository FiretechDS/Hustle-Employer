
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
import { Skill } from "../../skills/domain/Skill";
import { Status, statuses } from "./valueObjects/StatusValueObject";
import { Schedule } from "./valueObjects/ScheduleValueObject";
import { jobCreatePresentationProps, JobOfferPloc } from "../presentation";
import { PublishOfferService } from "../application/services/PublishOfferService";
import { OfferinMemoryPublisher } from "../adapter/out/OfferInMemoryPublisher";
import { LoadOffersService } from "../application/services/LoadOffersService";
import { OffersAPIRepository } from "../adapter/out/OffersAPIRepository";
import { ApplicationToInfraMapper } from "../adapter/JobApplicationToInfraMapper";
import { dependenciesLocator } from "../../common";
import { OfferApiRemover } from "../adapter/out/OfferApiRemover";
import { SkillApiLoader } from "../../skills/adapter/SkillApiLoader";
import { SkillMother } from "../../skills/mother/skillMother";
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
  const presentationOffer:jobCreatePresentationProps ={
    deadline: "2021-08-26",
    duration: 14,
    endHour: 23,
    hourlyRate: 14,
    latitude: 41.44336245906251,
    location: "Cleveland",
    longitude: -81.64968771001318,
    schedules: ['monday','tuesday'],
    skills: [{number:1,category:1,name:'any'}],
    specialRequirements: "",
    startHour: 6,
    status: 'Posted',
    title: "Offer em 3463",
    employerId:69,
  }
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
    location:'Los Angeles',
    latitude:4,
    longitude:100

  }
  const mappedOffer = ApplicationToInfraMapper.map(offer)
  const offerDto ={...mappedOffer, EmployerId:mappedOffer.employerId, statusJobOfferModelId:mappedOffer.statusJobOfferModel}

} catch (error) {
  console.log('Caught error: '+error.message)
}


 async function load(){
  try {
    const repo = new SkillApiLoader();
    const ploc = dependenciesLocator.provideJobOfferPloc()
    ploc.setEmployer(3643)
  } catch (error) {
    console.log(error.message)
  }
  
}

