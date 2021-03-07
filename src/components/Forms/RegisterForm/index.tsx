import * as React from 'react';
import { useFormik } from 'formik';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { StyledFormWrapper, StyledInputBox } from './styled';
import * as Yup from 'yup';
import { useAuth } from 'hooks/useAuth';

const RegisterSchema = Yup.object().shape({
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const RegisterForm: React.FC = () => {
  const { register } = useAuth();
  const {
    values: { email, firstName, lastName, password },
    handleSubmit,
    handleChange,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await register({
        password: values.password,
        email: values.email,
        name: `${values.firstName} ${values.lastName}`,
      });

      window.location.href = '/';
    },
    validationSchema: RegisterSchema,
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
            <Button dark type="submit" disabled={!isValid || !dirty}>
              Register
            </Button>
          </div>
        </StyledInputBox>
      </form>
    </StyledFormWrapper>
  );
};

export default RegisterForm;
