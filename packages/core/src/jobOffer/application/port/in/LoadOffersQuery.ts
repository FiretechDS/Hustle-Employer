import { JobOffer } from "../../../domain/JobOffer";
import {LoadOffersPort } from "../out/LoadOffersPort";

export interface LoadOffersQuery{
  getOffersPort:LoadOffersPort
  load(employerID: number): Promise<JobOffer[]>
}