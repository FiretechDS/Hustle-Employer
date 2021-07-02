import { JobApplicationProps } from "../../JobApplicationModel";

export interface PublishOfferPort{
  publish(offer:JobApplicationProps):Promise<Boolean>
}