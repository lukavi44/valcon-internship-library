import { Author, AuthorResponse } from './author.model'

export interface BookBodyData {
  Id: number
  Title: string
  Description: string
  Isbn: string
  Quantity: number
  Cover: Blob
  PublishDate: string
  AuthorIds: Author[]
}

export interface BookBodyDataGet {
  Id: number
  Title: string
  Description: string
  Isbn: string
  Quantity: number
  Cover: string
  PublishDate: string
  Authors: AuthorResponse[]
}
