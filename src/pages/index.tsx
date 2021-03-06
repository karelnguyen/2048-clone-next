import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useSwipeable } from "react-swipeable"
import { useGame } from "../hooks/GameProvider/useGame"
import { Direction } from "../../lib/Game/types"
import styled from "styled-components"

export default function Home() {
  const { game, handleStart, handleMove } = useGame()

  const handlers = useSwipeable({
    onSwipedUp: () => handleMove(Direction.UP, game),
    onSwipedDown: () => handleMove(Direction.DOWN, game),
    onSwipedLeft: () => handleMove(Direction.LEFT, game),
    onSwipedRight: () => handleMove(Direction.RIGHT, game),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })
  console.log("game", game)

  return (
    <div className={styles.container}>
      <Head>
        <title>2048 clone in Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={handleStart}>start</button>

        <table {...handlers}>
          <tbody>
            {game?.board?.map((row, i) => (
              <Row key={i} row={row} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}

const Row = ({ row }) => {
  return (
    <tr>
      {row.map((cell, i) => (
        <Cell key={i} cellValue={cell} />
      ))}
    </tr>
  )
}

const Cell = ({ cellValue }) => {
  let color = "cell"
  let value = cellValue === 0 ? "" : cellValue
  if (value) {
    color += ` color-${value}`
  }

  return (
    <td>
      <Tile>{value}</Tile>
    </td>
  )
}

const Tile = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`
