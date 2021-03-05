import { Board, Direction } from "../types"
import { evaluateMove } from "../Evaluation"
import { shiftToLeft } from "../Board"

export const moveLeft = (board: Board, direction: Direction) => {
  const newBoard = shiftToLeft(board)

  const { score, board: evaluatedBoard } = evaluateMove(newBoard, direction)

  return { board: evaluatedBoard, score }

  // let board = []
  // let score = 0

  // // Shift all numbers to the left
  // for (let r = 0; r < inputBoard.length; r++) {
  //   let row = []
  //   for (let c = inputBoard[r].length - 1; c >= 0; c--) {
  //     let current = inputBoard[r][c]
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

  // return { board, score }
}
