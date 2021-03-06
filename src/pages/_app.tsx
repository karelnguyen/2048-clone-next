import type { AppProps /*, AppContext */ } from "next/app"
import { AuthProvider } from "../hooks/useAuth"
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
