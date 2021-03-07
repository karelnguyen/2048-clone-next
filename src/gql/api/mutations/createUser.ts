import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($data: UserCreateInput) {
    createUser(data: $data) {
      name
      id
    }
  }
`;
