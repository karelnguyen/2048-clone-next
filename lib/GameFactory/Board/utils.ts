import { Board } from "../types"

export const randomStartingNumber = (
  startingNumbers: number[] = [2, 4]
): number => {
  const randomNumber =
    startingNumbers[Math.floor(Math.random() * startingNumbers.length)]
  return randomNumber
}

export const boardMoved = (original: Board, updated: Board): boolean => {
  return JSON.stringify(updated) !== JSON.stringify(original) ? true : false
}
