import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { skillMappedProps } from "../../../domain/Skill";

export interface LoadSkillsPort{
  load():Promise<Either<DataError,skillMappedProps[]>>
}