import { jobCreatedProps } from "../domain/JobDomainMapper";


export type mappedDomainProps={
  [P in keyof jobCreatedProps]: P extends "status"?number: P extends "deadline" ? Date: P extends "id" ? number|undefined: jobCreatedProps[P]
}
export type JobApplicationProps = mappedDomainProps;
