import * as React from 'react';
import { useFormik } from 'formik';
import { Input } from 'components/Input';
import { StyledInputBox } from './styled';
import { Button } from 'components/Button';
import { StyledCentered } from 'pages/styled';
import { useAuth } from 'hooks/useAuth';
import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SignInForm: React.FC = () => {
  const { signIn } = useAuth();

  const {
    values: { email, password },
    handleChange,
    handleSubmit,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email: newEmail, password: newPassword }) => {
      await signIn(newEmail, newPassword);
    },
    validationSchema: SignInSchema,
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
            <Button dark type="submit" disabled={!isValid || !dirty}>
              Login
            </Button>
          </StyledCentered>
        </StyledInputBox>
      </form>
    </>
  );
};

export default SignInForm;
