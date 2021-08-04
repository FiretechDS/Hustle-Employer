import { LoginApi } from "../../employer/adapter/out/LoginApi";
import { RegisterApi } from "../../employer/adapter/out/RegisterApiPublisher";
import { LoginEmployerUseCase } from "../../employer/application/port/in/LoginEmployerUseCase";
import { RegisterEmployerUseCase } from "../../employer/application/port/in/RegisterEmployerUseCase";
import { LoginPort } from "../../employer/application/port/out/LoginPort";
import { RegisterPort } from "../../employer/application/port/out/RegisterPort";
import { LoginService } from "../../employer/application/services/LoginService";
import { RegisterService } from "../../employer/application/services/RegisterService";

function provideRegisterService():RegisterEmployerUseCase{

  const registerPort:RegisterPort = new RegisterApi()
  const registerService:RegisterEmployerUseCase = new RegisterService(registerPort)
  return registerService
}
function provideLoginService():LoginEmployerUseCase{
  const loginPort:LoginPort = new LoginApi()
  const loginService:LoginEmployerUseCase = new LoginService(loginPort)
  return loginService
}

export const registerLocator ={
  provideRegisterService,
  provideLoginService
}