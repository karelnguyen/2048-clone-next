import { Button } from 'components/Button';
import * as React from 'react';
import Label from '../Label';
import {
  LabelWrapper,
  StyledHeader,
  StyledSubtitle,
  StyledTitle,
  StyledTitleWrapper,
} from './styled';

type HeaderProps = {
  handleStart: () => void;
  score: number;
  topScore?: number;
};

const Header: React.FC<HeaderProps> = ({ handleStart, score }) => {
  // const bestRecord = score > topScore ? score : topScore;
  return (
    <StyledHeader>
      <StyledTitleWrapper>
        <StyledTitle>2048</StyledTitle>
        <LabelWrapper>
          <Label score={score} title="score" />
          {/* {topScore && <Label score={bestRecord} title="best score" />} */}
        </LabelWrapper>
      </StyledTitleWrapper>
      <StyledSubtitle>
        <span>
          Join the numbers and get to the <b>2048 tile!</b>
        </span>

        <Button dark onClick={handleStart}>
          New Game
        </Button>
      </StyledSubtitle>
    </StyledHeader>
  );
};

export default Header;
