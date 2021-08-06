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
      }else 
      return Either.left({kind:'ApiError',message:"Failed to connect to server, try again later.",statusCode:loginResponse.status,error:loginResponse.statusText})
    } catch (error) {
      if(error.message==='Request failed with status code 401'){
          return Either.left({kind:'ApiError',message:"The password or email don't match.",statusCode:401,error:'Unauthorized'})
      }else
      return Either.left({kind:'UnexpectedError',message:new Error('Sorry, login failed by an unknown error, try again later.')})
    }
  }
  
}