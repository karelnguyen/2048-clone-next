import { gql } from '@apollo/client';

export const ALL_SCORES_QUERY = gql`
  query AllScores($where: ScoreWhereInput, $first: Int, $sortBy: [SortScoresBy!]) {
    allScores(where: $where, first: $first, sortBy: $sortBy) {
      id
      score
      player {
        id
        name
      }
    }
  }
`;
