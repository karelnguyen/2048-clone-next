import { gql } from '@apollo/client';

export const AUTHENTICATE_USER_MUTATION = gql`
  mutation AuthenticateUser($email: String, $password: String) {
    authenticateUserWithPassword(email: $email, password: $password) {
      token
      item {
        name
        id
      }
    }
  }
`;
