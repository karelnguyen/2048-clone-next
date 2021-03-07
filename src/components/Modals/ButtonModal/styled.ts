import styled from "styled-components"
import { colors } from "../../../constants"

export const StyledLoginModal = styled.div`
  border: 2px solid ${colors.boardBackground};
  background: ${colors.mainBackground};
  padding: 40px;
  max-width: 800px;
`

export const StyledOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
