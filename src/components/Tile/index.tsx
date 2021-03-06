import * as React from "react"
import { StyledTile } from "./styled"

const Tile = ({ value }) => {
  return <StyledTile value={value}>{value > 0 && value}</StyledTile>
}

export default Tile
