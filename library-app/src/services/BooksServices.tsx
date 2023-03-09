import { AxiosResponse } from 'axios'
import axiosInstance from './axiosConfig'

export interface BookBodyData {
  title: string
  description: string
  isbn: string
  quantity: number
  cover: string
  publishDate: string
  authorIds: number[]
}

const postBookRequest = (body: BookBodyData): Promise<AxiosResponse> => {
  return axiosInstance.post<BookBodyData>('api/Books', body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  })
}

export default postBookRequest
