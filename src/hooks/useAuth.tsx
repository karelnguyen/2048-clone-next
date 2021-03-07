import React, { useState, useContext, createContext } from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
} from '@apollo/client';
import { API_URL } from 'constants/.';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  const client = auth.createApolloClient();
  return (
    <AuthContext.Provider value={auth}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [authToken, setAuthToken] = useState(null);

  const isSignedIn = () => {
    if (authToken) {
      return true;
    } else {
      return false;
    }
  };

  const getAuthHeaders = () => {
    if (!authToken) return null;

    return {
      authorization: `Bearer ${authToken}`,
    };
  };

  const createApolloClient = () => {
    const link = new HttpLink({
      uri: API_URL,
      headers: getAuthHeaders(),
    });

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });
  };

  const signIn = async ({ username, password }) => {
    const client = createApolloClient();
    const LoginMutation = gql`
      mutation signin($username: String!, $password: String!) {
        login(username: $username, password: $password) {
          token
        }
      }
    `;

    const result = await client.mutate({
      mutation: LoginMutation,
      variables: { username, password },
    });

    console.log(result);

    if (result?.data?.login?.token) {
      setAuthToken(result.data.login.token);
    }
  };

  const signOut = () => {
    setAuthToken(null);
  };

  return {
    setAuthToken,
    isSignedIn,
    signIn,
    signOut,
    createApolloClient,
  };
}
