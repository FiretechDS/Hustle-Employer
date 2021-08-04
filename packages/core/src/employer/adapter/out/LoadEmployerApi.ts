import apiFetcher from "../../../common/adapter/api/springBoot";
import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { LoadEmployerPort } from "../../application/port/out/LoadEmployerPort";
import { ProfileProps } from "../../domain/EmployerDomainMapper";

export class LoadEmployerApi implements LoadEmployerPort{
  async load(employerId: number): Promise<Either<DataError, ProfileProps>> {
    try {
      const response = await apiFetcher.get(`/employer/get/${employerId}`)
      if (response.status===200){
        //pendiente, ver si luis puede agregar correo y password a get employer
        const employerData = await response.data.data
        
      }
    } catch (error) {
      
    }
    throw new Error("TERMINARRRRRRRRRRR");
  }

}