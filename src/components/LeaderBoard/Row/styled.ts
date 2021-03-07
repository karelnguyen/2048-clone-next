import styled from "styled-components"
import { colors } from "../../../constants"
import Image from "next/image"

export const StyledRow = styled.div<{ hasBorder: boolean }>`
  min-width: 350px;
  padding: 3px;
  border-top: ${({ hasBorder }) =>
    hasBorder ? ` 1px solid ${colors.boardBackground}` : "none"};
  border-bottom: 1px solid ${colors.boardBackground};
  display: grid;
  grid-template-columns: 20% 60% 20%;
  align-items: center;
`

export const StyledScore = styled.div`
  text-align: right;
`

export const StyledPlacement = styled.div<{ hasHighlight: boolean }>`
  border: ${({ hasHighlight }) =>
    hasHighlight ? `1px solid ${colors.highlight}` : "none"};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  > span {
    position: absolute;
  }
`

export const StyledStar = styled(Image)`
  position: absolute;
`
