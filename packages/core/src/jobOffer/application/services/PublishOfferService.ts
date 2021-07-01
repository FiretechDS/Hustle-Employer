import { JobOfferProps } from "../../domain/JobOffer";
import { PublishOfferUseCase } from "../port/in/PublishOfferUseCase";
import { PublishOfferPort } from "../port/out/PublishOfferPort";

export class PublishOfferService implements PublishOfferUseCase{
  publishOfferPort: PublishOfferPort;

  constructor(port: PublishOfferPort){
    this.publishOfferPort=port 
  }  
  
  publish(props: JobOfferProps): boolean {
    throw new Error("Method not implemented.");
  }

}