import { jobCreationProps } from "../domain/JobDomainMapper";


export type mappedDomainProps={
  [P in keyof jobCreationProps]: P extends "status"?number: P extends "deadline" ? Date: jobCreationProps[P]
}
export type JobApplicationProps = mappedDomainProps & { id?: number; };
