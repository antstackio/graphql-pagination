import { gql } from "apollo-server-express"
import getBooks from './resolvers/book.resolver'

export const typeDefs = gql`
  type Book {
    title: String
    subtitle: String
    isbn13: String
    price: String
    image: String
    url: String
  }

  type Edge {
    cursor: String
    node: Book
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean
  }

  type Response {
    edges: [Edge]
    pageInfo: PageInfo
  }

  type Query {
    books(first: Int, after: String): Response
  }

  schema {
    query: Query
  }
`

export const resolvers = {
  Query: {
    books : getBooks
  }
}
