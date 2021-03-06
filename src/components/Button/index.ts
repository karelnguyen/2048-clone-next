import styled from "styled-components"
import { colors } from "../../constants"

export const Button = styled.button`
  background-color: ${colors.button.default};
  color: ${colors.fonts.light};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    color: ${colors.fonts.dark};
  }
`
