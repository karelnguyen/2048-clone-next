import { Board, Direction, Game, GameResult, GameStatus } from "../types"
import { moveUp } from "./moveUp"
import { moveRight } from "./moveRight"
import { moveDown } from "./moveDown"
import { moveLeft } from "./moveLeft"
import { getBlankCoordinates, placeRandomNumber } from "../Board"

const nextResultByDirection = (
  board: Board,
  direction: Direction
): GameResult => {
  const resultMapper: Map<Direction, GameResult> = new Map([
    [Direction.UP, moveUp(board, direction)],
    [Direction.DOWN, moveDown(board, direction)],
    [Direction.LEFT, moveLeft(board, direction)],
    [Direction.RIGHT, moveRight(board, direction)],
  ])

  return resultMapper.get(direction)
}

export const move = (direction: Direction, game: Game): Game => {
  const gameIsFinished = game.gameStatus === GameStatus.FINISHED

  if (gameIsFinished) return game

  const { board, score } = nextResultByDirection(game.board, direction)
  const blankCoordinates = getBlankCoordinates(board)

  if (!blankCoordinates.length) {
    return {
      ...game,
      gameStatus: GameStatus.FINISHED,
    }
  }

  const newBoard = placeRandomNumber(board)

  return {
    score,
    board: newBoard,
    gameStatus: GameStatus.STARTED,
  }
}
