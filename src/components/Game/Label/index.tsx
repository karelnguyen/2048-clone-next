import * as React from "react"
import { StyledBox, StyledScore } from "./styled"

const Label: React.FC<{ score: number; title: string }> = ({
  score,
  title,
}) => {
  return (
    <StyledBox>
      <span>{title}</span>
      <StyledScore>{score}</StyledScore>
    </StyledBox>
  )
}

export default Label
