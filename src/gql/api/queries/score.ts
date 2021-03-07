import { gql } from '@apollo/client';

export const SCORE_QUERY = gql`
  query Score($where: ScoreWhereUniqueInput!) {
    Score(where: $where) {
      id
      score
      player {
        name
      }
    }
  }
`;
