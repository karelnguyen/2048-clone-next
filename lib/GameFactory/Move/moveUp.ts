import { Board, Direction } from "../types"
import { rotateRight, shiftToRight, rotateLeft } from "../Board"
import { evaluateMove } from "../Evaluation"

export const moveUp = (board: Board, direction: Direction) => {
  const convertedBoard = rotateRight(board)
  const newBoard = shiftToRight(convertedBoard)

  const { score, board: evaluatedBoard } = evaluateMove(newBoard, direction)

  return { board: rotateLeft(evaluatedBoard), score }
}
