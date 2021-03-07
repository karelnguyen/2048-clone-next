import { gql } from '@apollo/client';

export const CREATE_SCORE_MUTATION = gql`
  mutation CreateScore($data: ScoreCreateInput) {
    createScore(data: $data) {
      id
      score
      player {
        id
        name
      }
    }
  }
`;
