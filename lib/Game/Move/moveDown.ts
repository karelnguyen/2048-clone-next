import { Board, Direction } from "../types"
import { evaluateMove } from "../Evaluation"
import { rotateLeft, rotateRight, shiftToLeft } from "../Board"

export const moveDown = (board: Board, direction: Direction) => {
  const convertedBoard = rotateRight(board)
  const newBoard = shiftToLeft(convertedBoard)

  const { score, board: evaluatedBoard } = evaluateMove(newBoard, direction)

  return { board: rotateLeft(evaluatedBoard), score }
  // let rotatedRight = rotateRight(inputBoard)
  // let board = []
  // let score = 0

  // // Shift all numbers to the left
  // for (let r = 0; r < rotatedRight.length; r++) {
  //   let row = []
  //   for (let c = rotatedRight[r].length - 1; c >= 0; c--) {
  //     let current = rotatedRight[r][c]
  //     current === 0 ? row.push(current) : row.unshift(current)
  //   }
  //   board.push(row)
  // }

  // // Combine numbers and shift to left
  // for (let r = 0; r < board.length; r++) {
  //   for (let c = 0; c < board.length; c++) {
  //     if (board[r][c] > 0 && board[r][c] === board[r][c + 1]) {
  //       board[r][c] = board[r][c] * 2
  //       board[r][c + 1] = 0
  //       score += board[r][c]
  //     } else if (board[r][c] === 0 && board[r][c + 1] > 0) {
  //       board[r][c] = board[r][c + 1]
  //       board[r][c + 1] = 0
  //     }
  //   }
  // }

  // // Rotate board back upright
  // board = rotateLeft(board)

  // return { board, score }
}
