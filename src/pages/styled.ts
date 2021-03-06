import styled from "styled-components"
import { colors } from "../constants"

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.mainBackground};
  color: ${colors.fonts.dark};
`

export const StyledWrapperTitle = styled.h1`
  font-weight: 400;
  font-size: 60px;
`

export const StyledCentered = styled.div<{ flexDir: "row" | "column" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ flexDir }) => flexDir};
`
