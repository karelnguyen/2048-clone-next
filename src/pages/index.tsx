import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { GetStaticProps } from 'next';
import { AppProps } from 'next/app';
import { ALL_USERS_QUERY } from 'gql/api/queries/allUsers';
import { client } from 'gql/apolloClient';
import { ALL_SCORES_QUERY } from 'gql/api/queries/allScores';
import {
  AllScoresQuery,
  AllScoresQueryVariables,
  AllUsersQuery,
  AllUsersQueryVariables,
  Score,
  User,
} from 'gql/types';
import ButtonModal from 'components/Modals/ButtonModal';
import { Button } from 'components/Button';
import SignInForm from 'components/Forms/SignInForm';
import LeaderBoard from 'components/LeaderBoard';
import {
  StyledAuthButtons,
  StyledCentered,
  StyledWrapper,
  StyledWrapperTitle,
} from './styled';

type HomeProps = AppProps & {
  allUsers: User[];
  allScores: Score[];
};

const Home: React.FC<HomeProps> = (props) => {
  const { allScores } = props;
  console.log(props);

  return (
    <StyledWrapper>
      <Head>
        <title>2048 clone in Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Game /> */}
        <StyledCentered flexDir="column">
          <StyledWrapperTitle>2048</StyledWrapperTitle>
        </StyledCentered>

        <LeaderBoard scores={allScores} />

        <div>
          <StyledAuthButtons>
            <ButtonModal btnText="Log In">
              <SignInForm />
            </ButtonModal>

            <Link href="/register">
              <Button dark>Register</Button>
            </Link>
          </StyledAuthButtons>

          <StyledCentered>Login or register to start new game.</StyledCentered>
        </div>
      </main>
    </StyledWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { allUsers },
  } = await client.query<AllUsersQuery, AllUsersQueryVariables>({
    query: ALL_USERS_QUERY,
  });

  const {
    data: { allScores },
  } = await client.query<AllScoresQuery, AllScoresQueryVariables>({
    query: ALL_SCORES_QUERY,
  });
  return {
    props: {
      allUsers,
      allScores,
    },
  };
};

export default Home;
