import { Either } from "../../common/domain/Either";
import { ProfileProps, ProfileToDomainMapper } from "../domain/EmployerDomainMapper";

export function validateEmployer(employer:ProfileProps):Either<string,true>{
  try {
    ProfileToDomainMapper.map(employer)
    return Either.right(true)
  } catch (error) {
    return Either.left(error.message)
  }
}