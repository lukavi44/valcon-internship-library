import Author from './author.model'

export default interface BookBodyData {
  Id: number
  Title: string
  Description: string
  Isbn: string
  Quantity: number
  Cover: Blob
  PublishDate: string
  AuthorIds: Author[]
}
