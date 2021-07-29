import { Status } from "../domain/valueObjects/StatusValueObject";
import { jobCreatePresentationProps, jobPresentationProps } from "./JobPresentationModel";
import {  JobCreatedApplicationProps } from "../application/JobApplicationModel";
import { jobCreationProps } from "../domain/JobDomainMapper";


export class PresentationToApplicationMapper{
  static mapCreated (offer:jobPresentationProps):JobCreatedApplicationProps{
    return {
      ...offer,
      deadline:new Date(offer.deadline),
      creationDate:new Date(offer.creationDate),
      status:Status.getStatusNumber(offer.status),
    }
  }
  static mapToCreate (offer:jobCreatePresentationProps):jobCreationProps{
    return {
      ...offer,
      id:offer.id,
      deadline:new Date(offer.deadline),
      creationDate:offer.creationDate?new Date(offer.creationDate):undefined,
      status:Status.getStatusNumber(offer.status),
    }
  }
}