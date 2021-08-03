import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { LoginToDomainMapper, loginProps, LoginCreatedProps } from "../../domain/EmployerDomainMapper"
import { LoginEmployerUseCase } from "../port/in/LoginEmployerUseCase"
import { LoginPort } from "../port/out/LoginPort";

export class LoginService implements LoginEmployerUseCase{
  LoginPort: LoginPort;

  constructor(port:LoginPort){
    this.LoginPort=port
  }  

  async login(props: loginProps): Promise<Either<DataError, LoginCreatedProps>> {
    try {
      LoginToDomainMapper.map(props)
      const loginResponse = await this.LoginPort.login(props)
      return loginResponse
    } catch (error) {
      return Either.left({kind:'UnexpectedError',message:error})
    }
  }
  
}