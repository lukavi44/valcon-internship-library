export interface LocalStorage {
  AccessToken: string
  RefreshToken: string
  Expiration: string
}

const accessTokenKey = 'accessToken'
const refreshTokenKey = 'refreshToken'
const expirationKey = 'expiration'

export const setLocalStorage = ({ AccessToken, RefreshToken, Expiration }: LocalStorage) => {
  localStorage.setItem(accessTokenKey, AccessToken)
  localStorage.setItem(refreshTokenKey, RefreshToken)
  localStorage.setItem(expirationKey, Expiration)
}

export const getAccessToken = () => {
  return localStorage.getItem(accessTokenKey)
}

export const deleteLocalStorage = () => {
  localStorage.removeItem(accessTokenKey)
  localStorage.removeItem(refreshTokenKey)
  localStorage.removeItem(expirationKey)
}
