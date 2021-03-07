import * as React from 'react';
import { Score } from 'gql/types';
import { StyledCentered } from 'pages/styled';
import Row from './Row';
import { StyledList, StyledTitle } from './styled';

const LeaderBoard: React.FC<{ scores: Score[] }> = ({ scores }) => {
  return (
    <StyledCentered flexDir="column">
      <StyledTitle>Leaderboard</StyledTitle>

      <StyledList>
        {scores.map((m, i) => {
          return <Row key={i} placement={i + 1} score={m} />;
        })}
      </StyledList>
    </StyledCentered>
  );
};

export default LeaderBoard;
