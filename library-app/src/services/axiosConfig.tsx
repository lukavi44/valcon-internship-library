import axios, { AxiosRequestConfig } from 'axios'
import { getAccessToken } from '../helpers/manageLocalStorage'

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
}

const axiosInstance = axios.create(axiosConfig)
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${getAccessToken()}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
