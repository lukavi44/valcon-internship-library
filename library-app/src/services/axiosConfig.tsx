import axios, { AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
}

const axiosInstance = axios.create(axiosConfig)

export default axiosInstance
