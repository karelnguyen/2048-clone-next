import React, { useState, useContext, createContext, useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';

import { AUTHENTICATE_USER } from 'gql/api/mutations/authenticateUser';
import { AuthenticateUserMutation, AuthenticateUserMutationVariables } from 'gql/types';
import { createClient } from 'gql/apolloClient';
import { useRouter } from 'next/router';

type AuthContextValues = {
  setAuthToken: React.Dispatch<React.SetStateAction<string>>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  authToken: string;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextValues>(null);

export const AuthProvider = ({ children }) => {
  const { route } = useRouter();
  const [authToken, setAuthToken] = useState<string>();
  const [isLoading, setLoading] = useState(true);

  const client = createClient(authToken);

  const signIn = async (email: string, password: string) => {
    const {
      data: {
        authenticateUserWithPassword: { token },
      },
    } = await client.mutate<AuthenticateUserMutation, AuthenticateUserMutationVariables>({
      mutation: AUTHENTICATE_USER,
      variables: { email, password },
    });

    if (token) {
      localStorage.setItem('token', token);
      setAuthToken(token);
    }
  };

  const signOut = () => {
    setAuthToken(null);
  };

  useEffect(() => {
    setLoading(true);
    const persistedToken = localStorage.getItem('token');
    if (!persistedToken && !authToken && route !== '/') {
      window.location.href = '/';
    }
    setAuthToken(persistedToken);
    setLoading(false);
  }, []);

  if (isLoading) return <></>;

  return (
    <AuthContext.Provider
      value={{
        setAuthToken,
        signIn,
        signOut,
        authToken,
        isLoading,
      }}
    >
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
