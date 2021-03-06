import * as React from "react"
import { StyledTile } from "./styled"

const Tile = ({ cellValue }) => {
  let color = "cell"
  let value = cellValue === 0 ? "" : cellValue
  if (value) {
    color += ` color-${value}`
  }

  return (
    <td>
      <StyledTile>{value}</StyledTile>
    </td>
  )
}

export default Tile
