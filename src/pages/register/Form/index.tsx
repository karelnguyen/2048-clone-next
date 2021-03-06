import * as React from "react"
import { useFormik } from "formik"
import { Input } from "../../../components/Input"
import { StyledFormWrapper, StyledInputBox } from "./styled"
import { Button } from "../../../components/Button"

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <StyledFormWrapper>
      <h3>Sign up for a free account</h3>
      <form onSubmit={formik.handleSubmit}>
        <StyledInputBox>
          <span>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </span>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email adress"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Create password"
            autoComplete="create-password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div>
            <Button type="submit">Register</Button>
          </div>
        </StyledInputBox>
      </form>
    </StyledFormWrapper>
  )
}

export default RegisterForm
