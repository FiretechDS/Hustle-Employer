import apiFetcher from "../../common/adapter/api/springBoot";
import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";
import { LoadSkillsPort } from "../application/port/out/LoadSkillsPort";
import { skillMappedProps } from "../domain/Skill";
import { skillModel } from "./skillModel";

export class SkillApiLoader implements LoadSkillsPort{
  async load(): Promise<Either<DataError, skillMappedProps[]>> {
    const error:DataError = {kind:'UnexpectedError',message:new Error('Error at getting skill set.')}
    try{
      const skillsResult = await apiFetcher.get('/skill/list')
      if (skillsResult.status===200){
        if (skillsResult.data){
          const skills: Array<skillModel> = await skillsResult.data
          return Either.right(
            skills.map((skill:skillModel):skillMappedProps=>{
              return {
                name:skill.habilityName,
                category:skill.skillCategoryModel.id,
                number:skill.id
              }
            })
          )
        }
      }
      return Either.left({kind:'ApiError',error:skillsResult.statusText,statusCode:skillsResult.status,message:'Error at getting skill set.'})
    }catch{
      return Either.left(error)
    }

  }
     
}

