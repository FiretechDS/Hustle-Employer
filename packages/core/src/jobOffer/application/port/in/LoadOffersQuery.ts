import { jobPresentationProps } from "../../../domain/JobDomainMapper";
import {LoadOffersPort } from "../out/LoadOffersPort";

export interface LoadOffersQuery{
  getOffersPort:LoadOffersPort
  load(employerID: number): Promise<jobPresentationProps[]>
}