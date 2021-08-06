import apiFetcher from "../../../common/adapter/api/springBoot";
import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { LoadEmployerPort } from "../../application/port/out/LoadEmployerPort";
import { profileCreatedProps } from "../../domain/EmployerDomainMapper";
import { ProfileWebResponse } from "../ProfileWebModel";

export class LoadEmployerApi implements LoadEmployerPort{
  async load(employerId: number): Promise<Either<DataError, profileCreatedProps>> {
    try {
      const response = await apiFetcher.get(`/employer/get/${employerId}`)
      if (response.status===200){
        const employerData:ProfileWebResponse = await response.data.data
        const mappedEmployer:profileCreatedProps ={
          id:employerId,
          email:'',
          password:'',
          logoURL:employerData.companyLogo,
          companyName:employerData.companyName,
          firstLineAddress:employerData.addressResponse.street1,
          secondLineAddress:employerData.addressResponse.street2,
          city:employerData.addressResponse.city,
          state:employerData.addressResponse.state,
          zip: parseInt( employerData.addressResponse.zip),
          skills:employerData.skillModelList.map(skill=>{
            return {
              name:skill.habilityName,
              category:skill.skillCategoryModel.id,
              number:skill.id
            }
          }),
          contacts:employerData.contactEntityList.map((contact)=>{
            const name =contact.fullName.split(' ')
            return{
              phoneNumber:parseInt(contact.phoneNumber),
              id:contact.id,
              email:contact.email,
              jobTitle:contact.jobTitle,
              firstName:name[0] ,
              lastName:name[1]
            }
          })

        } 
        return Either.right(mappedEmployer)
      }
      return Either.left({kind:'ApiError',message:"Couldn't load employer, try again later.",statusCode:response.status,error:response.statusText})
    } catch (error) {
      return Either.left({kind:'UnexpectedError',message:error})
    }
  }

}