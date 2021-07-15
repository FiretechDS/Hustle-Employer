import { jobCreatedProps, jobCreationProps } from "../domain/JobDomainMapper";


export type mappedDomainProps<T>={
  [P in keyof T]: P extends "status"?number: P extends "deadline" ? Date: P extends "id" ? number|undefined: T[P]
}
export type JobApplicationProps = mappedDomainProps<jobCreationProps>;

export type JobCreatedApplicationProps = jobCreatedProps
