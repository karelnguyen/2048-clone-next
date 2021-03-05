import { Board, Direction } from "../types"
import { rotateRight, shiftToRight, rotateLeft } from "../Board"
import { evaluateMove } from "../Evaluation"

export const moveUp = (board: Board, direction: Direction) => {
  const convertedBoard = rotateRight(board)
  const newBoard = shiftToRight(convertedBoard)

  const { score, board: evaluatedBoard } = evaluateMove(newBoard, direction)

  return { board: rotateLeft(evaluatedBoard), score }

  // let rotatedRight = rotateRight(inputBoard)
  // let board = []
  // let score = 0

  // // Shift all numbers to the right
  // for (let r = 0; r < rotatedRight.length; r++) {
  //   let row = []
  //   for (let c = 0; c < rotatedRight[r].length; c++) {
  //     let current = rotatedRight[r][c]
  //     current === 0 ? row.unshift(current) : row.push(current)
  //   }
  //   board.push(row)
  // }

  // // Combine numbers and shift to right
  // for (let r = 0; r < board.length; r++) {
  //   for (let c = board[r].length - 1; c >= 0; c--) {
  //     if (board[r][c] > 0 && board[r][c] === board[r][c - 1]) {
  //       board[r][c] = board[r][c] * 2
  //       board[r][c - 1] = 0
  //       score += board[r][c]
  //     } else if (board[r][c] === 0 && board[r][c - 1] > 0) {
  //       board[r][c] = board[r][c - 1]
  //       board[r][c - 1] = 0
  //     }
  //   }
  // }

  // // Rotate board back upright
  // board = rotateLeft(board)

  // return { board, score }
}
