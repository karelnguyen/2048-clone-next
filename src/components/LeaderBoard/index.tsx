import * as React from 'react';
import { Score } from 'gql/types';
import { StyledCentered } from 'pages/styled';
import Row from './Row';
import { StyledList, StyledTitle } from './styled';

const mock: Score[] = [
  {
    id: '1',
    player: { name: 'Pavel' },
    score: 322321,
  },
  {
    id: '2',
    player: { name: 'Ota' },
    score: 23321,
  },
  {
    id: '3',
    player: { name: 'Karel' },
    score: 23320,
  },
  {
    id: '4',
    player: { name: 'Adam' },
    score: 2332,
  },
  {
    id: '5',
    player: { name: 'Pavel' },
    score: 331,
  },
];

const LeaderBoard: React.FC<{ scores: Score[] }> = ({ scores }) => {
  return (
    <StyledCentered flexDir="column">
      <StyledTitle>Leaderboard</StyledTitle>

      <StyledList>
        {mock.map((m, i) => {
          return <Row key={i} placement={i + 1} score={m} />;
        })}
      </StyledList>
    </StyledCentered>
  );
};

export default LeaderBoard;
