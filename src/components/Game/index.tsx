import * as React from 'react';
import { useSwipeable } from 'react-swipeable';
import useGame from 'hooks/useGame';
import Tile from './Tile';
import { StyledBoard, StyledTable } from './styled';
import Header from './Header';
import Message from './Message';
import { Direction, GameStatus } from '2048-ts-engine/lib/types';

const Game: React.FC<{ topScore: number }> = ({ topScore }) => {
  const { game, handleStart, handleMove } = useGame();

  const handlers = useSwipeable({
    onSwipedUp: () => handleMove(Direction.UP, game),
    onSwipedDown: () => handleMove(Direction.DOWN, game),
    onSwipedLeft: () => handleMove(Direction.LEFT, game),
    onSwipedRight: () => handleMove(Direction.RIGHT, game),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (!game) return <></>;

  return (
    <>
      <Header handleStart={handleStart} score={game.score} topScore={topScore} />
      <Message isVisible={game.gameStatus === GameStatus.FINISHED} topScore={game.score} />
      <StyledBoard {...handlers}>
        <StyledTable>
          <tbody>
            {game.board.map((row, i) => (
              <tr key={i}>
                {row.map((cell, i) => (
                  <td key={i}>
                    <Tile value={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </StyledBoard>
    </>
  );
};

export default Game;
