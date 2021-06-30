import { PublishOfferPort } from "../../application/port/out/PublishOfferPort";
import { JobOffersWeb } from "../OfferWebModel";

export class OfferinMemoryPublisher implements PublishOfferPort{
  publish(offer: JobOffersWeb): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  
}