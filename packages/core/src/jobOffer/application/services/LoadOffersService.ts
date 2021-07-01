import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { JobOffersWeb } from "../../adapter/OfferWebModel";
import { JobOffer } from "../../domain/JobOffer";
import { jobPresentationProps, ToDomainMapper } from "../../domain/JobDomainMapper";
import { ToPresentationMapper } from "../../presentation/JobPresentationMapper";
import { LoadOffersQuery } from "../port/in/LoadOffersQuery";
import {  LoadOffersPort } from "../port/out/LoadOffersPort";
import {  ToApplicationMapper } from "./JobApplicationMapper";
import { JobApplicationProps } from "./JobApplicationMapper";

export class LoadOffersService implements LoadOffersQuery{
  getOffersPort:LoadOffersPort;
  constructor(port: LoadOffersPort){
    this.getOffersPort=port;
  }
  async load(employerID:number):Promise<Either<DataError,jobPresentationProps[]>>{
    const jobOffersResult = await this.getOffersPort.loadOffers(employerID);
    const result:Either<DataError,jobPresentationProps[]> = jobOffersResult.fold(
      (error:DataError)=>{
        return Either.left(error)
      }
    , (jobOffers:JobOffersWeb[])=>{
        try {
          const mappedResult =jobOffers.map((jobOffer:JobOffersWeb)=>{
            const applicationMapped: JobApplicationProps=ToApplicationMapper.map(jobOffer);
            const domainMapped:JobOffer = ToDomainMapper.map(applicationMapped);
            return ToPresentationMapper.map(domainMapped)
          })
          return Either.right(mappedResult);
        } catch (error:DataError) {
          return Either.left({kind:'UnexpectedError',message:error})
        }
      }
    )
    return result;
  }
}

/* export class loadOffersService implements LoadOffersQuery{
  getOffersPort: LoadOffersPort;
  constructor (port:LoadOffersPort){
    this.getOffersPort=port;
  }
   async load(employerID:number): Promise<Either<DataError, jobPresentationProps[]>> {
    //Load offers
    const jobOffers = await this.getOffersPort.loadOffers(employerID);
    const result:Either<DataError,jobPresentationProps[]> =jobOffers.fold((error:DataError)=>{
      return Either.left(error)
    },(value:JobOffersWeb[])=>{
        try {
        const mappedJobOffers:jobPresentationProps[]= value.map((jobOffer:JobOffersWeb)=>{
          const applicationMapped: JobApplicationProps = ToApplicationMapper.map(jobOffer);
          const domainMapped:JobOffer=ToDomainMapper.map(applicationMapped)
          return ToPresentationMapper.map(domainMapped)

      })
        return Either.right(mappedJobOffers);
      } catch (error) {
        return Either.left(error)
      }
    })
    return result;
  }
} 
*/