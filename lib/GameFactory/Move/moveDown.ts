import { Board, Direction } from "../types"
import { evaluateMove } from "../Evaluation"
import { rotateLeft, rotateRight, shiftToLeft } from "../Board"

export const moveDown = (board: Board, direction: Direction) => {
  const convertedBoard = rotateRight(board)
  const newBoard = shiftToLeft(convertedBoard)

  const { score, board: evaluatedBoard } = evaluateMove(newBoard, direction)

  return { board: rotateLeft(evaluatedBoard), score }
}
