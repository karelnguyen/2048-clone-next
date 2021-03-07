import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { GetStaticProps } from 'next';
import { AppProps } from 'next/app';
import { createClient } from 'gql/apolloClient';
import { ALL_SCORES_QUERY } from 'gql/api/queries/allScores';
import { AllScoresQuery, AllScoresQueryVariables, Score, SortScoresBy, User } from 'gql/types';
import ButtonModal from 'components/Modals/ButtonModal';
import { Button } from 'components/Button';
import SignInForm from 'components/Forms/SignInForm';
import LeaderBoard from 'components/LeaderBoard';
import {
  StyledAuthButtons,
  StyledCentered,
  StyledDescription,
  StyledWrapper,
  StyledWrapperTitle,
} from '../styles/styled';
import { useAuth } from 'hooks/useAuth';

type HomeProps = AppProps & {
  allUsers: User[];
  allScores: Score[];
};

const Actions: React.FC<{ isAuthenticated: boolean; name: string }> = ({
  isAuthenticated,
  name,
}) => {
  const AuthorizedView = (
    <StyledCentered flexDir="column">
      <StyledDescription>Hello {name}, nice to see you again!</StyledDescription>
      <Link href="/game">
        <Button>New Game</Button>
      </Link>
    </StyledCentered>
  );
  const UnAuthorizedView = (
    <>
      <StyledAuthButtons>
        <ButtonModal btnText="Log In">
          <SignInForm />
        </ButtonModal>

        <Link href="/register">
          <Button dark>Register</Button>
        </Link>
      </StyledAuthButtons>
      <StyledCentered>Login or register to start new game.</StyledCentered>
    </>
  );
  return <div>{isAuthenticated ? AuthorizedView : UnAuthorizedView}</div>;
};

const Home: React.FC<HomeProps> = (props) => {
  const { authToken, userName } = useAuth();
  const { allScores } = props;

  return (
    <StyledWrapper>
      <Head>
        <title>2048 clone in Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StyledCentered flexDir="column">
          <StyledWrapperTitle>2048</StyledWrapperTitle>
        </StyledCentered>

        <LeaderBoard scores={allScores} />

        <Actions isAuthenticated={!!authToken} name={userName} />
      </main>
    </StyledWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();

  const sortBy = 'score_DESC' as SortScoresBy;

  const {
    data: { allScores },
  } = await client.query<AllScoresQuery, AllScoresQueryVariables>({
    query: ALL_SCORES_QUERY,
    variables: { first: 10, sortBy },
    fetchPolicy: 'network-only',
  });
  return {
    props: {
      allScores,
    },
  };
};

export default Home;
