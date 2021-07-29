import apiFetcher from "../../src/common/adapter/api/springBoot";
import { OfferApiUpdater } from "../../src/jobOffer/adapter/out/OfferApiUpdater";
import { UpdateOfferService } from "../../src/jobOffer/application/services/UpdateOfferService";
import { JobOfferMother } from "./mother/JobOfferMother";

describe('Update Offer', () => {

   afterEach(() => {
    jest.resetAllMocks();
  });

  jest.mock("../../src/common/adapter/api/springBoot")

  const port = new OfferApiUpdater()
  const service= new UpdateOfferService(port)

  test('should update offer ', async () => {
    apiFetcher.post = jest.fn().mockResolvedValue({status:200})
    const updateResult = await service.updateOffer(JobOfferMother.createValid())
    expect(updateResult.isLeft()).toBe(false)
    expect(updateResult.isRight()).toBe(true)
  })

  test("shouldn't update offer, api error ", async () => {
    apiFetcher.post = jest.fn().mockResolvedValue({status:404})
    const updateResult = await service.updateOffer(JobOfferMother.createValid())
    expect(updateResult.isLeft()).toBe(true)
    expect(updateResult.isRight()).toBe(false)
    updateResult.fold(
      (error)=>{
        expect(error.kind).toBe('ApiError')
      },()=>{
      }
    )
  })

  test("shouldn't update offer, validation error ", async () => {
    apiFetcher.post = jest.fn().mockResolvedValue({status:200})
    const updateResult = await service.updateOffer({...JobOfferMother.createValid(),hourlyRate:-1})
    expect(updateResult.isLeft()).toBe(true)
    expect(updateResult.isRight()).toBe(false)
    updateResult.fold(
      (error)=>{
        expect(error.kind).toBe('UnexpectedError')
      },()=>{
      }
    )
  })
});
