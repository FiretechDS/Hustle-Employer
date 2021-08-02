import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { ProfileProps } from "../../domain/EmployerDomainMapper";
import { RegisterPort } from "../../application/port/out/RegisterPort";
import { ApplicationToInfraMapper } from "../ProfileApplicationToInfraMapper";
import apiFetcher from "../../../common/adapter/api/springBoot";
import { ProfileCreateDto } from "../ProfileWebModel";

export class RegisterApi implements RegisterPort{
    async register(profile: ProfileProps): Promise<Either<DataError, true>> {
      try {
        const mappedEmployer:ProfileCreateDto = ApplicationToInfraMapper.map(profile)
        const publishResult =await apiFetcher.post('/employer/register',mappedEmployer,{headers:{'Content-Type':'application/json'}})
        if(publishResult.status===200){
          return Either.right(true)
        }
        return Either.left({kind:'ApiError',message:"Couldn't perform register, try again later", error:publishResult.statusText,statusCode:publishResult.status})
      } catch (error) {
        return Either.left({kind:'UnexpectedError',message:new Error("Couldn't perform register, try again later.")})
      }
    }
    
  }