import { Board, Direction } from "../types"
import { evaluateMove } from "../Evaluation"
import { shiftToRight } from "../Board"

export const moveRight = (board: Board, direction: Direction) => {
  const newBoard = shiftToRight(board)
  const { score, board: evaluatedBoard } = evaluateMove(newBoard, direction)

  return { board: evaluatedBoard, score }
}
