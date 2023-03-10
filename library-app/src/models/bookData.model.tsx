import Author from './author.model'

export default interface BookBodyData {
  id: number
  title: string
  description: string
  isbn: string
  quantity: number
  cover: string
  publishDate: string
  authorIds: Author[]
}
