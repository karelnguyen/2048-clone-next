import * as React from "react"
import { useSwipeable } from "react-swipeable"
import { Direction } from "../../../lib/GameFactory/types"
import useGame from "../../hooks/useGame"
import Tile from "./Tile"
import { StyledBoard } from "./styled"
import Header from "./Header"

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

  if (!game) return <></>

  return (
    <>
      <Header handleStart={handleStart} score={game.score} />

      <StyledBoard {...handlers}>
        <table>
          <tbody>
            {game.board.map((row, i) => (
              <tr key={i}>
                {row.map((cell, i) => (
                  <td key={i}>
                    <Tile value={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </StyledBoard>
    </>
  )
}

export default Game
