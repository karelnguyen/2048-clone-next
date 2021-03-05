import * as React from "react"
import { GameContext } from "./GameContext"
import { startGame, move } from "../../lib/Game"
import { Game, Direction } from "../../lib/Game/types"

const GameProvider: React.FC = ({ children }) => {
  const [game, setGame] = React.useState<Game>()

  const handleStart = () => {
    const newGame = startGame()
    setGame(newGame)
  }

  const handleMove = (direction: Direction, currentGame: Game) => {
    console.log("direction", direction, currentGame.board)

    const updatedGame = move(direction, currentGame)
    setGame(updatedGame)
  }

  return (
    <GameContext.Provider value={{ game, handleStart, handleMove }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider
