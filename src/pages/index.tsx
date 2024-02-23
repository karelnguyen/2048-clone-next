import { Button } from 'components/Button';
import SignInForm from 'components/Forms/SignInForm';
import Game from 'components/Game';
import ButtonModal from 'components/Modals/ButtonModal';
import { Score, User } from 'gql/types';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import {
  StyledAuthButtons,
  StyledCentered,
  StyledDescription,
  StyledWrapper,
} from '../styles/styled';

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
  // const { authToken, userName } = useAuth();
  // const { allScores } = props;

  return (
    <StyledWrapper>
      <Head>
        <title>2048 clone in Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <LeaderBoard scores={allScores} /> */}
        {/* <Actions isAuthenticated={!!authToken} name={userName} /> */}
        <Game topScore={0} />
      </main>
    </StyledWrapper>
  );
};

export default Home;
