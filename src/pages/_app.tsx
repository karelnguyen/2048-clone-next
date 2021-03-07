import type { AppProps /*, AppContext */ } from 'next/app';
import { AuthProvider } from 'hooks/useAuth';
import '../styles/globals.css';
import { React } from '@ungap/global-this';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
