import { Board, Direction } from "../types"
import { evaluateMove } from "../Evaluation"
import { shiftToRight } from "../Board"

export const moveRight = (board: Board, direction: Direction) => {
  const newBoard = shiftToRight(board)
  const { score, board: evaluatedBoard } = evaluateMove(newBoard, direction)

  return { board: evaluatedBoard, score }

  // let board = []
  // let score = 0

  // // Shift all numbers to the right
  // for (let r = 0; r < inputBoard.length; r++) {
  //   let row = []
  //   for (let c = 0; c < inputBoard[r].length; c++) {
  //     let current = inputBoard[r][c]
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

  // return { board, score }
}
