import { JobOffersWeb } from "../../adapter/OfferWebModel";
import { jobPresentationProps, ToDomainMapper } from "../../domain/JobDomainMapper";
import { ToPresentationMapper } from "../../presentation/JobPresentationMapper";
import { LoadOffersQuery } from "../port/in/LoadOffersQuery";
import {  LoadOffersPort } from "../port/out/LoadOffersPort";
import {  ToApplicationMapper } from "./JobApplicationMapper";

export class loadOffersService implements LoadOffersQuery{
  getOffersPort: LoadOffersPort;
  constructor (port:LoadOffersPort){
    this.getOffersPort=port;
  }
  async load(employerID:number): Promise<jobPresentationProps[]> {
    //Load offers
    return new Promise((resolve,reject)=>{
      const jobOffers =  this.getOffersPort.loadOffers(employerID);
      jobOffers.then((value:JobOffersWeb[])=>{
        const mappedJobOffers:jobPresentationProps[]= value.map((jobOffer:JobOffersWeb)=>{
          const applicationMapped = ToApplicationMapper.map(jobOffer);
          const domainMapped=ToDomainMapper.map(applicationMapped)
          return ToPresentationMapper.map(domainMapped)
        })
        resolve(mappedJobOffers);
      }).catch((error)=>{
        reject('Oh no...'+error.message)
      })
      
    })
  }  
}