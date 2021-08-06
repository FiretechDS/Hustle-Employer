import { SkillApiLoader } from "../../src/skills/adapter/SkillApiLoader";
import { GetSkillsService } from "../../src/skills/application/services/GetSkillsService";
import { Either } from "../../src/common/domain/Either";
import { SkillMother } from "./mother/skillMother";
import { DataError } from "../../src/common/domain/DataError";

describe('Load skills',()=>{
  afterEach(() => {
    jest.resetAllMocks();
  });
 
  const skills = SkillMother.createValid(3)

  jest.mock("../../src/skills/adapter/SkillApiLoader")

  test('Should load skills',async()=>{
    const loadPort = new SkillApiLoader()
    loadPort.load=jest.fn().mockResolvedValue(Either.right(skills))
    const skillService = new GetSkillsService(loadPort)
    const errorOrSuccess = await skillService.findSkills()
    expect(errorOrSuccess.isRight()).toBe(true)
    expect(errorOrSuccess.isLeft()).toBe(false)
  })

  test('Shouldnt load skills',async()=>{
    const loadPort = new SkillApiLoader()
    const dataError:DataError = {kind:'ApiError',statusCode:404,message:'The application exited with code -1', error:'Could not load skills'}
    loadPort.load=jest.fn().mockResolvedValue(Either.left(dataError))
    const skillService = new GetSkillsService(loadPort)
    const errorOrSuccess = await skillService.findSkills()
    expect(errorOrSuccess.isRight()).toBe(false)
    expect(errorOrSuccess.isLeft()).toBe(true)
  })
})