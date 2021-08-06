import { profileCreatedProps, ProfileProps } from "../domain/EmployerDomainMapper";

export type mappedDomainProps<T>={
  [P in keyof T]: P 
}
export type ProfileApplicationProps = mappedDomainProps<ProfileProps>;

export type ProfileCreatedApplicationProps = profileCreatedProps
