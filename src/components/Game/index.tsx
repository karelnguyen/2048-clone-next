import * as React from "react"
import { useSwipeable } from "react-swipeable"
import { Direction } from "../../../lib/GameFactory/types"
import useGame from "../../hooks/useGame"
import Tile from "../Tile"

const Game: React.FC = () => {
  const { game, handleStart, handleMove } = useGame()

  const handlers = useSwipeable({
    onSwipedUp: () => handleMove(Direction.UP, game),
    onSwipedDown: () => handleMove(Direction.DOWN, game),
    onSwipedLeft: () => handleMove(Direction.LEFT, game),
    onSwipedRight: () => handleMove(Direction.RIGHT, game),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <>
      <h1>2048</h1>
      <div>Join the numbers and get to the 2048 tile!</div>
      <button onClick={handleStart}>start</button>

      <table {...handlers}>
        <tbody>
          {game?.board?.map((row, i) => (
            <tr key={i}>
              {row.map((cell, i) => (
                <Tile key={i} cellValue={cell} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Game
