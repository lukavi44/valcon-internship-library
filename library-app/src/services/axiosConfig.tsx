import axios, { AxiosRequestConfig } from 'axios'
import BACK_URL from '../utils/urls'

const axiosConfig: AxiosRequestConfig = {}

const instance = axios.create(axiosConfig)

export default instance
