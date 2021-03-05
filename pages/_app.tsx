import "../styles/globals.css"
import type { AppProps /*, AppContext */ } from "next/app"
import GameProvider from "../hooks/GameProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  )
}

export default MyApp
