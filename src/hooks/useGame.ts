import * as React from 'react';
import { startGame, move } from 'lib/GameFactory';
import { Direction, Game } from 'lib/GameFactory/types';

enum EventKeyCodes {
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
}

const directionMapper = {
  [EventKeyCodes.UP]: Direction.UP,
  [EventKeyCodes.DOWN]: Direction.DOWN,
  [EventKeyCodes.LEFT]: Direction.LEFT,
  [EventKeyCodes.RIGHT]: Direction.RIGHT,
};

type UseGame = {
  game: Game;
  handleStart: () => void;
  handleMove: (direction: Direction, currentGame: Game) => void;
};

const useGame = (): UseGame => {
  const [game, _setGame] = React.useState<Game>();
  const gameRef = React.useRef(game);

  const updateGame = (game: Game) => {
    gameRef.current = game;
    _setGame(game);
  };

  const handleStart = () => {
    const newGame = startGame();
    updateGame(newGame);
  };

  const handleMove = (direction: Direction, currentGame: Game) => {
    const updatedGame = move(direction, currentGame);
    updateGame(updatedGame);
  };

  const eventHandler = (event) => {
    const isMove = [Direction.UP, Direction.LEFT, Direction.DOWN, Direction.RIGHT].includes(
      directionMapper[event.code]
    );

    if (gameRef.current && isMove && event.code)
      return handleMove(directionMapper[event.code], gameRef.current);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', eventHandler);
  }, []);

  React.useEffect(() => {
    if (!game) updateGame(startGame());
  }, [game]);

  return { game, handleStart, handleMove };
};

export default useGame;
