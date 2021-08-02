import { RegisterApi } from "../../employer/adapter/out/RegisterApiPublisher";
import { RegisterEmployerUseCase } from "../../employer/application/port/in/RegisterEmployerUseCase";
import { RegisterPort } from "../../employer/application/port/out/RegisterPort";
import { RegisterService } from "../../employer/application/services/RegisterService";

function provideRegisterService():RegisterEmployerUseCase{

  const registerPort:RegisterPort = new RegisterApi()
  const registerService:RegisterEmployerUseCase = new RegisterService(registerPort)
  return registerService
}

export const registerLocator ={
  provideRegisterService
}