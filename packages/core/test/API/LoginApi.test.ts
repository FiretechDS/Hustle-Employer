import { LoginApi } from "../../src/employer/adapter/out/LoginApi";
import { LoginMother } from "./mother/LoginMother";

describe('Login integration test', () => {
  const loginApi = new LoginApi()
  test('should return success or unauthorized', async () => {
    const loginCredentials = LoginMother.createValid()
    const loginResponse = await loginApi.login(loginCredentials)
    loginResponse.fold(
      (error)=>{
        expect(error.kind).toBe('ApiError')
        error.kind==='ApiError'&&expect(error.statusCode).toBe(404)
      },(success)=>{
        console.log('logged in')
        expect(success.email).toBe(loginCredentials.email)
        expect(success.password).toBe(loginCredentials.password)
      }
    )
  })
  
});
