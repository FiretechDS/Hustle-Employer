import { Status } from "../domain/valueObjects/StatusValueObject";
import { jobCreatePresentationProps, jobPresentationProps } from "./JobPresentationModel";
import { JobApplicationProps } from "../application/JobApplicationModel";
import { jobCreationProps } from "../domain/JobDomainMapper";


export class PresentationToApplicationMapper{
  static mapCreated (offer:jobPresentationProps):JobApplicationProps{
    return {
      ...offer,
      deadline:new Date(offer.deadline),
      status:Status.getStatusNumber(offer.status),
    }
  }
  static mapToCreate (offer:jobCreatePresentationProps):jobCreationProps{
    return {
      ...offer,
      id:offer.id,

      deadline:new Date(offer.deadline),
      status:offer.status? Status.getStatusNumber(offer.status):1,
    }
  }
}