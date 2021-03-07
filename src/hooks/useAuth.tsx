import React, { useState, useContext, createContext, useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';

import { AUTHENTICATE_USER_MUTATION } from 'gql/api/mutations/authenticateUser';
import {
  AuthenticateUserMutation,
  AuthenticateUserMutationVariables,
  CreateUserMutation,
  CreateUserMutationVariables,
  UserCreateInput,
} from 'gql/types';
import { createClient } from 'gql/apolloClient';
import { useRouter } from 'next/router';
import { CREATE_USER_MUTATION } from 'gql/api/mutations/createUser';

type AuthContextValues = {
  userId: string;
  register: (data: UserCreateInput) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  authToken: string;
  userName: string;
};

const AuthContext = createContext<AuthContextValues>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const { route } = useRouter();
  const [authToken, setAuthToken] = useState<string>();
  const [userName, setUserName] = useState<string>();
  const [userId, setUserId] = useState<string>();

  const client = createClient(authToken);

  const signIn = async (email: string, password: string) => {
    try {
      const {
        data: {
          authenticateUserWithPassword: {
            token,
            item: { name, id },
          },
        },
      } = await client.mutate<AuthenticateUserMutation, AuthenticateUserMutationVariables>({
        mutation: AUTHENTICATE_USER_MUTATION,
        variables: { email, password },
      });
      localStorage.setItem('token', token);
      localStorage.setItem('name', name);
      localStorage.setItem('id', id);
      setUserName(name);
      setAuthToken(token);
      setUserId(id);
    } catch (e) {
      alert(e);
    }
  };

  const signOut = () => {
    setAuthToken(null);
  };

  const register = async (data: UserCreateInput) => {
    try {
      const {
        data: {
          createUser: { name },
        },
      } = await client.mutate<CreateUserMutation, CreateUserMutationVariables>({
        mutation: CREATE_USER_MUTATION,
        variables: { data },
      });
      setUserName(name);
      await signIn(data.email, data.password);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    const persistedToken = localStorage.getItem('token');
    const persistedName = localStorage.getItem('name');
    const persistedId = localStorage.getItem('id');

    setAuthToken(persistedToken);
    setUserName(persistedName);
    setUserId(persistedId);
  }, []);

  useEffect(() => {
    if (!authToken) {
      const persistedToken = localStorage.getItem('token');

      if (!persistedToken && !authToken && route !== '/') {
        window.location.href = '/';
      }
    }
  }, [authToken]);

  return (
    <AuthContext.Provider
      value={{
        userId,
        signIn,
        signOut,
        register,
        authToken,
        userName,
      }}
    >
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValues => {
  return useContext(AuthContext);
};
