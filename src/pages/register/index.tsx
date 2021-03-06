import { useQuery } from "@apollo/client"
import Head from "next/head"
import * as React from "react"

import { StyledCentered, StyledWrapper, StyledWrapperTitle } from "../styled"
import RegisterForm from "./Form"

{
  /* <Link href="/about">
<a>About Us</a>
</Link> */
}

export default function Register(props) {
  return (
    <StyledWrapper>
      <Head>
        <title>2048 clone in Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StyledCentered flexDir="column">
          <StyledWrapperTitle>2048</StyledWrapperTitle>
          <RegisterForm />
        </StyledCentered>
      </main>
    </StyledWrapper>
  )
}
