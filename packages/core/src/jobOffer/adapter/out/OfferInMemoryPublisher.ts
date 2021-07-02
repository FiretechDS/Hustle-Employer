import { JobApplicationProps } from "../../application/JobApplicationModel";
import { PublishOfferPort } from "../../application/port/out/PublishOfferPort";

export class OfferinMemoryPublisher implements PublishOfferPort{
  publish(offer: JobApplicationProps): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  
}