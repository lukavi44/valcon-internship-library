import { AxiosResponse } from 'axios'
import { AuthorPost, AuthorResponse } from '../models/author.model'
import axiosInstance from './axiosConfig'

export const getAuthors = async (): Promise<AxiosResponse> => {
  return axiosInstance.get<AuthorResponse[]>('api/Authors', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  })
}

export const postAuthor = async (body: FormData): Promise<AxiosResponse> => {
  return axiosInstance.post<AuthorPost>('api/Authors', body, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  })
}
