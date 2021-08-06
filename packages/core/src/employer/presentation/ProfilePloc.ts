import { Ploc } from "../../common";
import { DataError } from "../../common/domain/DataError";
import { plocResult } from "../../common/presentation/PlocResult";
import { LoadEmployerUseCase } from "../application/port/in/LoadEmployerUseCase";
import { UpdateEmployerUseCase } from "../application/port/in/UpdateEmployerUseCase";
import { profilePresentationProps } from "./EmployerPresentationModel";
import { profileInitialState, ProfileState } from "./ProfileState";

export class ProfilePloc extends Ploc<ProfileState>{
  private loadProfileUseCase:LoadEmployerUseCase
  private updateProfileUseCase: UpdateEmployerUseCase
  private employerId:number =-1

  constructor(loadProfileUseCase:LoadEmployerUseCase,updateUseCase:UpdateEmployerUseCase){
    super(profileInitialState)
    this.loadProfileUseCase=loadProfileUseCase
    this.updateProfileUseCase=updateUseCase
  }

  setEmployer(id:number){
    this.employerId=id
    this.loadProfile() 
  }

  async updateEmployer(profile:profilePresentationProps):Promise<plocResult>{
    const plocResult:plocResult = {success:false,value:'An unexpected error has occured'}
    const result = await this.updateProfileUseCase.updateEmployer(profile)
    result.fold(
      (error)=>plocResult.value=error.kind==='ApiError'?error.message:error.message.message,
      ()=>{
        plocResult.value='Profile was succesfully updated.'
        plocResult.success=true
        this.loadProfile()
      }
    )
    return plocResult
  }

  private async loadProfile(){
    if (this.employerId&&this.employerId!==-1){
      const isProfileloaded =await this.loadProfileUseCase.loadEmployer(this.employerId)
      isProfileloaded.fold(
        (error)=>{
          this.changeState(this.handleError(error))
        },(profile)=>{
          this.changeState(this.handleLoaded(profile))
        }
      )

    }
  }
  private handleLoaded(props:profilePresentationProps):ProfileState{
    return{
      kind:'loaded',
      profile:props
    }
  }
  private handleError(error:DataError):ProfileState{
    return{
      kind:'error',
      error:error.kind==='ApiError'?error.message:error.message.message
    }
  }
}