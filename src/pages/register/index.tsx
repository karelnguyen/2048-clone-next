import Head from 'next/head';
import * as React from 'react';

import { StyledCentered, StyledWrapper, StyledWrapperTitle } from '../styled';
import RegisterForm from 'components/Forms/RegisterForm';

const Register: React.FC = () => {
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
  );
};

export default Register;
