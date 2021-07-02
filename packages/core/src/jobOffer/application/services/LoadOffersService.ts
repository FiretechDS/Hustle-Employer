import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { JobOffer } from "../../domain/JobOffer";
import { ToDomainMapper } from "../../domain/JobDomainMapper";
import { ToPresentationMapper } from "../../presentation/JobPresentationMapper";
import { LoadOffersQuery } from "../port/in/LoadOffersQuery";
import {  LoadOffersPort } from "../port/out/LoadOffersPort";
import { JobApplicationProps } from "../JobApplicationModel";
import { jobPresentationProps } from "../../presentation/JobPresentationModel";

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
    , (jobOffers:JobApplicationProps[])=>{
        try {
          const mappedResult =jobOffers.map((jobOffer:JobApplicationProps)=>{
            const domainMapped:JobOffer = ToDomainMapper.map(jobOffer);
            return ToPresentationMapper.map(domainMapped)
          })
          return Either.right(mappedResult);
        } catch (error) {
          return Either.left({kind:'UnexpectedError',message:error})
        }
      }
    )
    return result;
  }
}
