import { Board, Direction, Game } from "../types"
import { moveUp } from "./moveUp"
import { moveRight } from "./moveRight"
import { moveDown } from "./moveDown"
import { moveLeft } from "./moveLeft"

const nextResultByDirection = (board: Board, direction: Direction) => {
  switch (direction) {
    case Direction.UP:
      return moveUp(board, direction)
    case Direction.DOWN:
      return moveDown(board, direction)
    case Direction.LEFT:
      return moveLeft(board, direction)
    case Direction.RIGHT:
      return moveRight(board, direction)
  }
}

export const move = (direction: Direction, game: Game): Game => {
  console.log("game, board", game.board)
  const nextResult: { board: Board; score: number } = nextResultByDirection(
    game.board,
    direction
  )
  console.log("nextResult", nextResult)

  return game
}
