import { JobOffer } from "../../domain/JobOffer";
import { LoadOffersQuery } from "../port/in/LoadOffersQuery";
import {  LoadOffersPort } from "../port/out/LoadOffersPort";

export class loadOffersService implements LoadOffersQuery{
  getOffersPort: LoadOffersPort;
  constructor (port:LoadOffersPort){
    this.getOffersPort=port;
  }
  load(employerID:number): Promise<JobOffer[]> {
    throw new Error("Method not implemented.");
  }
  
}