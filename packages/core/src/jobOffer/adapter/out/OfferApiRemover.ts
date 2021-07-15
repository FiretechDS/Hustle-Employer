import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { DeleteOfferPort } from "../../application/port/out/DeleteOfferPort";
import apiFetcher from "../api/springBoot";

export class OfferApiRemover implements DeleteOfferPort{
 async delete(offerId: number): Promise<Either<DataError, true>> {
    const unexpectedError:DataError={kind:'UnexpectedError', message:new Error("The offer couldn't be removed, try again later.")}
    try {
        const response = await apiFetcher.get(`job-offer/delete/${offerId}`)
        if (response.status===200){
          return Either.right(true)
        }
        return Either.left(unexpectedError)
    } catch {
      return Either.left(unexpectedError)
    }
  }
  
}