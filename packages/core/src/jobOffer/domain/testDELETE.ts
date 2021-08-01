
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
import { JobOfferPloc } from "../presentation";
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


  const password ="aAaaaaaaa1*"
  const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

        if (!password.match(passwordRegExp)){
            throw new Error("Password must contain at least 1 lowercase, 1 uppercase, 1 number, 1 special character and at least 8 characters long")
        }else{
          console.log('valid password: '+ password)
        } 
} catch (error) {
  console.log('Caught error: '+error.message)
}


 async function load(){
  try {
    const repo = new SkillApiLoader();
    const ploc = dependenciesLocator.provideJobOfferPloc()
    const result = await repo.load()
    result.fold(()=>{},(good)=>{console.log(good)} )
  } catch (error) {
    console.log(error.message)
  }
  
}

