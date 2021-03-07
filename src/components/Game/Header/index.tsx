import * as React from 'react';
import { Button } from 'components/Button';
import Label from '../Label';
import {
  LabelWrapper,
  StyledTitle,
  StyledTitleWrapper,
  StyledHeader,
  StyledSubtitle,
} from './styled';

type HeaderProps = {
  handleStart: () => void;
  score: number;
};

const Header: React.FC<HeaderProps> = ({ handleStart, score }) => {
  return (
    <StyledHeader>
      <StyledTitleWrapper>
        <StyledTitle>2048</StyledTitle>
        <LabelWrapper>
          <Label score={score} title="score" />
          <Label score={score} title="best score" />
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
