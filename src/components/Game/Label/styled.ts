import styled from "styled-components"
import { colors } from "../../../constants"

export const StyledBox = styled.div`
  padding: 5px 20px;
  color: ${colors.fonts.light};
  background-color: ${colors.boardBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 10px;
  border-radius: 5px;
  font-weight: 500;
`

export const StyledScore = styled.span`
  font-size: 25px;
  font-weight: bold;
`
