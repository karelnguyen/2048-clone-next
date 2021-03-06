import { useQuery } from "@apollo/client"
import Head from "next/head"
import * as React from "react"
import Game from "../components/Game"
import { StyledWrapper } from "./styled"
import Link from "next/link"
import { ALL_USERS_QUERY } from "../gql/api/queries/allUsers"
import { client } from "../gql/apolloClient"
import { ALL_SCORES_QUERY } from "../gql/api/queries/allScores"
import {
  AllScoresQuery,
  AllScoresQueryVariables,
  AllUsersQuery,
  AllUsersQueryVariables,
  Score,
  User,
} from "../gql/types"
import { GetStaticProps } from "next"
import { AppProps } from "next/app"

type HomeProps = AppProps & {
  allUsers: User[]
  allScores: Score[]
}

export default function Home(props: HomeProps) {
  const { allUsers, allScores } = props
  console.log(props)

  return (
    <StyledWrapper>
      <Head>
        <title>2048 clone in Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Game />

        <Link href="/register">
          <a>Register</a>
        </Link>
      </main>
    </StyledWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { allUsers },
  } = await client.query<AllUsersQuery, AllUsersQueryVariables>({
    query: ALL_USERS_QUERY,
  })

  const {
    data: { allScores },
  } = await client.query<AllScoresQuery, AllScoresQueryVariables>({
    query: ALL_SCORES_QUERY,
  })
  return {
    props: {
      allUsers,
      allScores,
    },
  }
}
