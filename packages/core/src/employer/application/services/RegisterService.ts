import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { ProfileProps, ProfileToDomainMapper } from "../../domain/EmployerDomainMapper";
import { RegisterEmployerUseCase } from "../../application/port/in/RegisterEmployerUseCase";
import { RegisterPort } from "../../application/port/out/RegisterPort";

export class RegisterService implements RegisterEmployerUseCase{
    registerPort: RegisterPort;

    constructor(port: RegisterPort){
        this.registerPort= port
    }

    async register(props:ProfileProps):Promise<Either<DataError,true>>{
        try {
            //Validate rules inside domain value objects
            const domainMapped = ProfileToDomainMapper.map(props);
            const serviceResult:Either<DataError,true> = await this.registerPort.publish(props);
            const errorOrOffer:Either<DataError,true>= serviceResult.fold( 
            (error)=>{
              return Either.left(error)
            },(()=>{
              return Either.right(true)
            } )
            )
            return errorOrOffer
          } catch (error) {
            return Either.left({kind:'UnexpectedError',message:error})
          }
    }
    
}