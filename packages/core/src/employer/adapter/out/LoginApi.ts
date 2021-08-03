import apiFetcher from "../../../common/adapter/api/springBoot";
import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { LoginPort } from "../../application/port/out/LoginPort";
import { loginProps, LoginCreatedProps } from "../../domain/EmployerDomainMapper";
import { credentialsDto, credentialsWebModel } from "../CredentialsWebModel";

export class LoginApi implements LoginPort{
  async login(loginProps: loginProps): Promise<Either<DataError, LoginCreatedProps>> {
    try {
      const loginDto:credentialsDto = {...loginProps}
      const loginResponse = await apiFetcher.post('/auth/access',loginDto,{headers:{'Content-Type':'application/json'}})
      if(loginResponse.status===200){
        const loginData:credentialsWebModel = await loginResponse.data?.data
        const mappedData:LoginCreatedProps ={
          id:loginData.idUser,
          email:loginData.email,
          password:loginProps.password
          
        } 
        return Either.right(mappedData)
      }
      return Either.left({kind:'ApiError',message:"Failed to connect to server, try again later",statusCode:loginResponse.status,error:loginResponse.statusText})
    } catch (error) {
      return Either.left({kind:'UnexpectedError',message:new Error('Incorrect email or password')})
    }
  }
  
}