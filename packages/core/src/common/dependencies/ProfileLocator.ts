import { LoadEmployerApi } from "../../employer/adapter/out/LoadEmployerApi";
import { UpdateEmployerApi } from "../../employer/adapter/out/UpdateEmployerApi";
import { LoadEmployerService } from "../../employer/application/services/LoadEmployerService";
import { UpdateEmployerService } from "../../employer/application/services/UpdateEmployerService";
import { ProfilePloc } from "../../employer/presentation/ProfilePloc";

function provideEmployerPloc():ProfilePloc{
  const loadPort = new LoadEmployerApi()
  const loadService =new LoadEmployerService(loadPort)

  const updatePort = new UpdateEmployerApi()
  const updateService = new UpdateEmployerService(updatePort)
  return new ProfilePloc(loadService,updateService)

}

export const profileLocator ={
  provideEmployerPloc
}