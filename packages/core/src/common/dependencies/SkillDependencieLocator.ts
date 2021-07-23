import { SkillApiLoader } from "../../skills/adapter/SkillApiLoader"
import { GetSkillsQuery } from "../../skills/application/port/in/GetSkillsQuery"
import { LoadSkillsPort } from "../../skills/application/port/out/LoadSkillsPort"
import { GetSkillsService } from "../../skills/application/services/GetSkillsService"
import { SkillPloc } from "../../skills/presentation/SkillPloc"

function provideSkillProp():SkillPloc{
  const port: LoadSkillsPort = new SkillApiLoader()
  const service:GetSkillsQuery = new GetSkillsService(port)
  const ploc:SkillPloc = new SkillPloc(service)
  return ploc 
}

export const skillLocator={
  provideSkillProp
}