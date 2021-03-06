import { gql } from "@apollo/client"

export const ALL_USERS_QUERY = gql`
  query AllUsers {
    allUsers {
      id
      name
    }
  }
`
