import axios, { AxiosResponse } from 'axios'

export interface LoginRequestData {
  email: string
  password: string
}

export interface LoginResponseData {
  accessToken: string
  refreshToken: string
  expiration: Date
}

export const LoginRequest = async (
  body: LoginRequestData,
): Promise<AxiosResponse<LoginResponseData>> => {
  return axios.post<LoginResponseData>(
    'https://library-practice-app.azurewebsites.net/api/Auth/login',
    body,
  )
}

export default LoginRequest
