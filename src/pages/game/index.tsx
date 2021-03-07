import Game from 'components/Game';
import Head from 'next/head';
import { StyledWrapper } from 'pages/styled';
import * as React from 'react';

const GamePage: React.FC = () => {
  return (
    <StyledWrapper>
      <Head>
        <title>2048 clone in Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Game />
      </main>
    </StyledWrapper>
  );
};

export default GamePage;
