import Head from "next/head"
import * as React from "react"
import Game from "../components/Game"
import { Main } from "./styled"

export default function Home() {
  return (
    <Main>
      <Head>
        <title>2048 clone in Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Game />
      </main>
    </Main>
  )
}
