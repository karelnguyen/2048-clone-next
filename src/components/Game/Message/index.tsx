import { Button } from 'components/Button';
import { StyledCentered } from 'pages/styled';
import * as React from 'react';
import { StyledMessageBox, StyledOverlay, StyledScore } from './styled';
import { useRouter } from 'next/router';

const Message: React.FC<{ isVisible: boolean; topScore: number }> = ({ isVisible, topScore }) => {
  const { reload } = useRouter();
  const onClick = () => {
    reload();
  };
  if (!isVisible) return <></>;
  return (
    <StyledOverlay>
      <StyledCentered>
        <StyledMessageBox>
          <h1>GAME OVER</h1>
          <StyledCentered flexDir="column">
            <span>You have reached</span>
            <StyledScore>{topScore}</StyledScore>
            points!
          </StyledCentered>
          <Button onClick={onClick} dark>
            New game
          </Button>
        </StyledMessageBox>
      </StyledCentered>
    </StyledOverlay>
  );
};

export default Message;
