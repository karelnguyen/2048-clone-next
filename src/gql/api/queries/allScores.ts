import { gql } from "@apollo/client"

export const ALL_SCORES_QUERY = gql`
  query AllScores {
    allScores {
      id
      score
      player {
        id
        name
      }
    }
  }
`
