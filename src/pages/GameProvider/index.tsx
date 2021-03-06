import * as React from "react"
import { GameContext } from "./GameContext"
import { startGame, move } from "../../../lib/Game"
import { Game, Direction } from "../../../lib/Game/types"

enum EventKeyCodes {
  UP = "ArrowUp",
  DOWN = "ArrowDown",
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
}

const directionMapper = {
  [EventKeyCodes.UP]: Direction.UP,
  [EventKeyCodes.DOWN]: Direction.DOWN,
  [EventKeyCodes.LEFT]: Direction.LEFT,
  [EventKeyCodes.RIGHT]: Direction.RIGHT,
}

const GameProvider: React.FC = ({ children }) => {
  const [game, _setGame] = React.useState<Game>()
  const gameRef = React.useRef(game)

  const updateGame = (data: Game) => {
    gameRef.current = data
    _setGame(data)
  }

  const handleStart = () => {
    const newGame = startGame()
    updateGame(newGame)
  }

  const handleMove = (direction: Direction, currentGame: Game) => {
    const updatedGame = move(direction, currentGame)
    updateGame(updatedGame)
  }

  const eventHandler = (event) => {
    if (gameRef.current)
      return handleMove(directionMapper[event.code], gameRef.current)
  }

  React.useEffect(() => {
    window.addEventListener("keydown", eventHandler)
  }, [])

  return (
    <GameContext.Provider value={{ game, handleStart, handleMove }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider
