import axios, { AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosRequestConfig = {}

const instance = axios.create(axiosConfig)

export default instance
