import { useQuery } from '@apollo/client';
import Game from 'components/Game';
import { ALL_SCORES_QUERY } from 'gql/api/queries/allScores';
import { AllScoresQuery, AllScoresQueryVariables, SortScoresBy } from 'gql/types';
import { useAuth } from 'hooks/useAuth';
import Head from 'next/head';
import { StyledWrapper } from 'pages/styled';
import * as React from 'react';

const GamePage: React.FC = () => {
  const { userId } = useAuth();
  const sortType = 'score_DESC' as SortScoresBy;

  const { data } = useQuery<AllScoresQuery, AllScoresQueryVariables>(ALL_SCORES_QUERY, {
    variables: { where: { player: { id: userId } }, first: 1, sortBy: sortType },
  });

  const topScore = data?.allScores?.[0]?.score || 0;

  return (
    <StyledWrapper>
      <Head>
        <title>2048 clone in Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Game topScore={topScore} />
      </main>
    </StyledWrapper>
  );
};

export default GamePage;
