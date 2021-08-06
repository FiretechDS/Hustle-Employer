import { Either } from "../../common/domain/Either";
import { ProfileProps, ProfileToDomainMapper } from "../domain/EmployerDomainMapper";
import { EmployerContact, contactMappedProps } from "../domain/valueObjects/ContactValueObject";

export function validateEmployer(employer:ProfileProps):Either<string,true>{
  try {
    ProfileToDomainMapper.map(employer)
    return Either.right(true)
  } catch (error) {
    return Either.left(error.message)
  }
}

export function validateContact(contact:contactMappedProps):Either<string,true>{
  try{
    var contacto =EmployerContact.create(contact.id,contact.firstName,contact.lastName,contact.jobTitle,contact.phoneNumber,contact.email)
    console.log(contacto)
    return Either.right(true)
  } catch(error){
    return Either.left(error.message)
  }
}