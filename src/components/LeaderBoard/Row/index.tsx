import * as React from 'react';
import { Score } from 'gql/types';
import { numberWithCommas } from '../../utils';
import { StyledPlacement, StyledRow, StyledScore, StyledStar } from './styled';

const Row: React.FC<{ score: Score; placement: number }> = ({
  score,
  placement,
}) => {
  const isFirstPlace = placement === 1;
  return (
    <StyledRow hasBorder={isFirstPlace}>
      <StyledPlacement hasHighlight={[2, 3].includes(placement)}>
        {isFirstPlace && (
          <StyledStar src="/star.png" alt="Star" width={50} height={50} />
        )}
        <span>{placement}</span>
      </StyledPlacement>
      <div>{score.player.name}</div>
      <StyledScore>{numberWithCommas(score.score)}</StyledScore>
    </StyledRow>
  );
};

export default Row;
