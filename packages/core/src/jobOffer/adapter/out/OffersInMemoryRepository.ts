import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { LoadOffersPort } from "../../application/port/out/LoadOffersPort";
import {JobOffersWeb } from "../OfferWebModel";

export class OffersInMemoryRepository implements LoadOffersPort{
 async loadOffers(employerID: number):Promise<Either<DataError, JobOffersWeb[]>> {
  return new Promise((resolve,reject)=>{      
    const result=  jobOffers.filter((jobOffer)=>{
      return jobOffer.employerId === employerID
    })
    if(result.length>0) resolve(Either.right(result))
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
    deadline: new Date(2021,10,5),
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
      scheduleModel:['tuesday','saturday']
  },
    {
    id:2,
    employerId:1,
    title:`New work opportunity 2`,
    location:'New Yorkshire',
    deadline: new Date(2021,10,5),
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
      scheduleModel:['monday','tuesday','wednesday']
  },
    {
    id:3,
    employerId:2,
    title:`New work opportunity 3`,
    location:'New York',
    deadline: new Date(2021,10,5),
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
      scheduleModel:['monday','tuesday']
  }



]