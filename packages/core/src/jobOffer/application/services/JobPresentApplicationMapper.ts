import { Status } from "../../domain/valueObjects/StatusValueObject";
import { jobPresentationProps } from "../../presentation/JobPresentationModel";
import { JobApplicationProps } from "./JobInfraApplicationMapper";


export class PresentationToApplicationMapper{
  static map (offer:jobPresentationProps):JobApplicationProps{
    return {
      ...offer,
      deadline:new Date(offer.deadline),
      status:Status.getStatusNumber(offer.status),
    }
  }

}