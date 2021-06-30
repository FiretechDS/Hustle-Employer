import { JobOfferProps } from "../../../domain/JobOffer";
import { PublishOfferPort } from "../out/PublishOfferPort";

export interface PublishOfferUseCase{
   publishOfferPort : PublishOfferPort,
   publish(props: JobOfferProps):boolean
}