import { gql } from '@apollo/client';

export const AUTHENTICATED_USER_QUERY = gql`
  query AuthenticatedUser {
    authenticatedUser {
      id
      name
      email
    }
  }
`;
