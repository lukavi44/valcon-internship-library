import { AxiosResponse } from 'axios'
import { BookBodyData, BookBodyDataGet } from '../models/bookData.model'
import axiosInstance from './axiosConfig'

export const postBookRequest = (body: FormData): Promise<AxiosResponse> => {
  return axiosInstance.post<BookBodyData>('api/Books', body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  })
}

export const getBooksRequest = (): Promise<AxiosResponse> => {
  return axiosInstance.get<BookBodyDataGet>('api/Books', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  })
}
