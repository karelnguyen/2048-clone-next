import type { AppProps /*, AppContext */ } from 'next/app';
import { AuthProvider } from 'hooks/useAuth';
import * as React from 'react';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
