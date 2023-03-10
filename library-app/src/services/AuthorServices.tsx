import { AxiosResponse } from 'axios'
import Author from '../models/author.model'
import axiosInstance from './axiosConfig'

const getAuthors = async (): Promise<AxiosResponse> => {
  return axiosInstance.get<Author[]>('api/Authors', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  })
}

export default getAuthors
