import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { JobApplicationProps } from "../../application/JobApplicationModel";
import { LoadOffersPort } from "../../application/port/out/LoadOffersPort";
import { InfraToApplicationMapper } from "../JobInfraApplicationMapper";
import {JobOffersWeb } from "../OfferWebModel";

export class OffersInMemoryRepository implements LoadOffersPort{
 async loadOffers(employerID: number):Promise<Either<DataError, JobApplicationProps[]>> {
  return new Promise((resolve,reject)=>{      
    const result=  jobOffers.filter((jobOffer)=>{
      return jobOffer.employerId === employerID
    })
    if(result.length>0) resolve(Either.right(result.map((offer)=>{return InfraToApplicationMapper.map(offer)})))
    else resolve(Either.left({kind:'UnexpectedError',message:new Error('Error inesperado')}))
  }
  )}

}


const jobOffers:JobOffersWeb[]=[
  {
    id:1,
    employerId:1,
    title:`New work opportunity 1`,
    location:'New York',
    deadline: '2021,10,5',
    specialRequirements:'Must be nice',
    duration:24,
    hourlyRate:40,
    statusJobOfferModel:{
      id:1,
      description:'Posted'
    },
    skillModel:[ {
          id: 1,
          habilityName: "Java",
          skillCategoryModel: {
            id: 2,
            nameCategory: "Technical "
          }
        },
        {
          id: 2,
          habilityName: "C",
          skillCategoryModel: {
            id: 2,
            nameCategory: "Technical "
          }
        },
        {
          id: 3,
          habilityName: "Dart",
          skillCategoryModel: {
            id: 2,
            nameCategory: "Technical "
          }
        },
      ],
      scheduleModel:[{id:2, day:'tuesday', startHour: 10, endHour: 18}]
  },
    {
    id:2,
    employerId:1,
    title:`New work opportunity 2`,
    location:'New Yorkshire',
    deadline: '2022,11,5',
    specialRequirements:'Must be nice',
    duration:400,
    hourlyRate:45,
    statusJobOfferModel:{
      id:1,
      description:'Posted'
    },
    skillModel:[ {
          id: 1,
          habilityName: "Java",
          skillCategoryModel: {
            id: 2,
            nameCategory: "Technical "
          }
        },
        {
          id: 2,
          habilityName: "C",
          skillCategoryModel: {
            id: 2,
            nameCategory: "Technical "
          }
        },
        {
          id: 3,
          habilityName: "Dart",
          skillCategoryModel: {
            id: 2,
            nameCategory: "Technical "
          }
        },
      ],
      scheduleModel:[{id:2, day:'tuesday', startHour: 10, endHour: 18},{id:2, day:'wednesday', startHour: 10, endHour: 18}]
  },
    {
    id:3,
    employerId:2,
    title:`New work opportunity 3`,
    location:'New York',
    deadline: '2021-11-6',
    specialRequirements:'Must be nice',
    duration:400,
    hourlyRate:45,
    statusJobOfferModel:{
      id:1,
      description:'Posted'
    },
    skillModel:[ {
          id: 1,
          habilityName: "Java",
          skillCategoryModel: {
            id: 2,
            nameCategory: "Technical "
          }
        },
        {
          id: 2,
          habilityName: "C",
          skillCategoryModel: {
            id: 2,
            nameCategory: "Technical "
          }
        },
        {
          id: 3,
          habilityName: "Dart",
          skillCategoryModel: {
            id: 2,
            nameCategory: "Technical "
          }
        },
      ],
       scheduleModel:[{id:2, day:'monday', startHour: 10, endHour: 18},{id:2, day:'thursday', startHour: 10, endHour: 18}]
  }



]