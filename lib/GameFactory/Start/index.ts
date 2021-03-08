import { getDefaultBoard } from '../Board';
import { Board, Game, GameStatus } from '../types';

export const startGame = (
  board: Board = [
    [0, 0, 0, 0],
    [1024, 32, 0, 0],
    [0, 64, 0, 0],
    [0, 0, 0, 2048],
  ]
): Game => ({
  board: getDefaultBoard(board),
  gameStatus: GameStatus.STARTED,
  score: 0,
});
