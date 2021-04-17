import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query books($first: Int, $after: String) {
    books(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          title
          subtitle
          price
          url
          image
        }
      }
    }
  }
`;
