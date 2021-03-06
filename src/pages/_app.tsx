import "../styles/globals.css"
import type { AppProps /*, AppContext */ } from "next/app"
import GameProvider from "./GameProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  )
}

export default MyApp
