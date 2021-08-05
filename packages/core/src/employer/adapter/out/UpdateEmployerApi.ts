import apiFetcher from "../../../common/adapter/api/springBoot";
import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { UpdateEmployerPort } from "../../application/port/out/UpdateEmployerPort";
import { profileCreatedProps } from "../../domain/EmployerDomainMapper";
import { ApplicationToInfraMapper } from "../ProfileApplicationToInfraMapper";

export class UpdateEmployerApi implements UpdateEmployerPort{
  async update(employer: profileCreatedProps): Promise<Either<DataError, true>> {
    try {
      const profileDto ={...ApplicationToInfraMapper.map(employer),id:employer.id}
      console.log(profileDto)
      const apiResponse = await apiFetcher.post('/employer/update',profileDto,{headers:{'Content-Type':'application/json'}})
      if (apiResponse.status===200){
        return Either.right(true)
      }
      return Either.left({kind:'ApiError',message:'A server error has occurred, try again later.',statusCode:apiResponse.status,error:apiResponse.statusText})
    } catch (error) {
      return Either.left({kind:'UnexpectedError',message:error})
    }

  }
  
  
}