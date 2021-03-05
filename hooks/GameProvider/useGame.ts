import * as React from "react"
import { GameContext } from "./GameContext"

export const useGame = () => React.useContext(GameContext)
