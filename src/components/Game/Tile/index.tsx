import * as React from "react"
import { StyledTile } from "./styled"

const Tile: React.FC<{ value: number }> = ({ value }) => {
  return <StyledTile value={value}>{value > 0 && value}</StyledTile>
}

export default Tile
