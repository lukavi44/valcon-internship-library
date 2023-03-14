import { AxiosResponse } from 'axios'
import { AuthorResponse } from '../models/author.model'
import axiosInstance from './axiosConfig'

const getAuthors = async (): Promise<AxiosResponse> => {
  return axiosInstance.get<AuthorResponse[]>('api/Authors', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  })
}

export default getAuthors
