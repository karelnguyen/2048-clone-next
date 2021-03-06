import styled from "styled-components"
import { colors } from "../../constants"

const mapValueColor = (value: number) => {
  if (value === 0) return colors.tile.default
  if (value >= 2048) return colors.tile.biggest

  return colors.tile[value]
}

export const StyledTile = styled.div<{ value: number }>`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
  background-color: ${({ value }) => mapValueColor(value)};
  border-radius: 5px;
  margin: 3px;
`
