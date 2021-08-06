import {RemoveOfferService} from "../../src/jobOffer/application/services/RemoveOfferService"
import {OfferApiRemover} from "../../src/jobOffer/adapter/out/OfferApiRemover"
import { JobOfferMother } from "./mother/JobOfferMother"
import apiFetcher from "../../src/common/adapter/api/springBoot"

describe('Delete offer', ()=>{

  afterEach(() => {
    jest.resetAllMocks();
  });

  jest.mock('../../src/common/adapter/api/springBoot')


  test("shouldn't delete offer", async () => {
    apiFetcher.get = jest.fn().mockResolvedValue({status:404})
    const deletePort = new OfferApiRemover()
    const deleteUseCase = new RemoveOfferService(deletePort)
    const successOrError = await deleteUseCase.delete({...JobOfferMother.createValid(),status:4})
    expect(successOrError.isLeft()).toBe(true)
    expect(successOrError.isRight()).toBe(false)
  })


  test("should delete offer", async () => {
    apiFetcher.get = jest.fn().mockResolvedValue({status:200})
    const port = new OfferApiRemover()
    const deleteUseCase = new RemoveOfferService(port)
    const offer = JobOfferMother.createValid()
    const successOrError = await deleteUseCase.delete(offer)
    expect(successOrError.isLeft()).toBe(false)
    expect(successOrError.isRight()).toBe(true)
  })
})