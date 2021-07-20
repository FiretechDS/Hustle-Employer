import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { Skill } from "../../domain/Skill";
import { GetSkillsQuery } from "../port/in/GetSkillsQuery";
import { LoadSkillsPort } from "../port/out/LoadSkillsPort";

export class GetSkillsService implements GetSkillsQuery{
  port: LoadSkillsPort;
  constructor(loadSkillsPort: LoadSkillsPort ){
    this.port=loadSkillsPort
  }
  async findSkills(): Promise<Either<DataError, Skill[]>> {
    try {
      const skillsOrError = await this.port.load()
      const result:Either<DataError,Skill[]> =skillsOrError.fold(
        (error)=>{
          return Either.left(error)
        },(skills)=>{
          return Either.right(
            Skill.createList(skills)
          )
        }
      )
      return result
    } catch (error) {
      return Either.left({kind:'UnexpectedError',message:error})
    }
  }

}