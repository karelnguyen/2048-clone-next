import * as React from 'react';
import { useFormik } from 'formik';
import { Input } from 'components/Input';
import { StyledInputBox } from './styled';
import { Button } from 'components/Button';
import { StyledCentered } from 'pages/styled';

const SignInForm: React.FC = () => {
  const {
    values: { email, password },
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <StyledInputBox>
          <span>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={email}
            />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="login-password"
              onChange={handleChange}
              value={password}
            />
          </span>
          <StyledCentered>
            <Button dark type="submit">
              Login
            </Button>
          </StyledCentered>
        </StyledInputBox>
      </form>
    </>
  );
};

export default SignInForm;
