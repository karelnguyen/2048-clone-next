import * as React from "react"
import { Game, Direction } from "../../../lib/Game/types"

export interface GameContextValues {
  game: Game
  handleStart: () => void
  handleMove: (direction: Direction, game: Game) => void
}

const defaultFn = () => {}

export const GameContext = React.createContext<GameContextValues>({
  game: null,
  handleStart: defaultFn,
  handleMove: defaultFn,
})
