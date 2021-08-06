import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { profileCreatedProps } from "../../domain/EmployerDomainMapper";
import { LoadEmployerUseCase } from "../port/in/LoadEmployerUseCase";
import { LoadEmployerPort } from "../port/out/LoadEmployerPort";

export class LoadEmployerService implements LoadEmployerUseCase{
  loadPort: LoadEmployerPort;
  constructor(port:LoadEmployerPort){
    this.loadPort=port
  }
 async  loadEmployer(employerId:number): Promise<Either<DataError, profileCreatedProps>> {
    try {
      const loadResult = await this.loadPort.load(employerId)
      return loadResult;
    } catch (error) {
      return Either.left({kind:'UnexpectedError',message:error})
    }
  }
  
}