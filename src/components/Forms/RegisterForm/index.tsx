import * as React from 'react';
import { useFormik } from 'formik';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { StyledFormWrapper, StyledInputBox } from './styled';

const RegisterForm: React.FC = () => {
  const {
    values: { email, firstName, lastName, password },
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <StyledFormWrapper>
      <h3>Sign up for a free account</h3>
      <form onSubmit={handleSubmit}>
        <StyledInputBox>
          <span>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              value={firstName}
            />
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              value={lastName}
            />
          </span>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email adress"
            onChange={handleChange}
            value={email}
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Create password"
            autoComplete="create-password"
            onChange={handleChange}
            value={password}
          />
          <div>
            <Button dark type="submit">
              Register
            </Button>
          </div>
        </StyledInputBox>
      </form>
    </StyledFormWrapper>
  );
};

export default RegisterForm;
