import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { mappedDomainProps } from "../../application/JobApplicationModel";
import { LoadOffersPort } from "../../application/port/out/LoadOffersPort";
import { InfraToApplicationMapper } from "../JobInfraApplicationMapper";
import { JobOffersWeb } from "../OfferWebModel";
import axios from 'axios';

export class OffersAPIRepository implements LoadOffersPort{
    async loadOffers(employerID: number): Promise<Either<DataError, mappedDomainProps[]>> {
        try {
            const loadResponse = await fetch(`https://hustle-api-spring.herokuapp.com/api/job-offer/list/employer/${employerID}`, {mode: 'no-cors'})
            //console.log("loadResponse es: "+loadResponse);
            if(loadResponse.ok){
                const offersList : Array<JobOffersWeb> = await loadResponse.json();
                if(offersList.length>0) return Either.right(offersList.map((offer)=>{return InfraToApplicationMapper.map(offer)}))
                    else return Either.left({kind:'UnexpectedError',message:new Error('No offers found')})
                }
            return Either.left({kind:'ApiError',message:'No response from API',statusCode: loadResponse.status,error: loadResponse.statusText})
        } catch (error) {
            return Either.left({kind:'UnexpectedError',message:error})    
        }
    }
}