import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { Skill } from "../../../domain/Skill";
import { LoadSkillsPort } from "../out/LoadSkillsPort";

export interface GetSkillsQuery{
  port: LoadSkillsPort
  findSkills():Promise<Either<DataError,Skill[]>>
}