import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { profileCreatedProps, ProfileToDomainMapper } from "../../domain/EmployerDomainMapper";
import { UpdateEmployerUseCase } from "../port/in/UpdateEmployerUseCase";
import { UpdateEmployerPort } from "../port/out/UpdateEmployerPort";

export class UpdateEmployerService implements UpdateEmployerUseCase{
  port: UpdateEmployerPort;
  constructor(port:UpdateEmployerPort){
    this.port=port
  }
  async updateEmployer(employer: profileCreatedProps): Promise<Either<DataError, true>> {
    try {
      ProfileToDomainMapper.map(employer)
      return await this.port.update(employer)
    } catch (error) {
      return Either.left({kind:'UnexpectedError',message:error})
    }
  }

}