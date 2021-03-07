import styled from 'styled-components';
import { colors } from 'constants/.';

const tileSize = 100;

const mapValueColor = (value: number) => {
  if (value === 0) return colors.tile.default;
  if (value >= 2048) return colors.tile.biggest;

  return colors.tile[value];
};

const mapFontColor = (value: number) => {
  return value < 16 ? colors.fonts.dark : colors.fonts.light;
};

export const StyledTile = styled.div<{ value: number }>`
  width: ${tileSize}px;
  height: ${tileSize}px;
  max-width: ${tileSize}px;
  max-height: ${tileSize}px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ value }) => mapFontColor(value)};
  font-size: ${tileSize / 2}px;
  font-weight: 600;
  background-color: ${({ value }) => mapValueColor(value)};
  border-radius: 5px;
  margin: 3px;

  @media only screen and (max-width: 600px) {
    width: ${tileSize / 1.3}px;
    height: ${tileSize / 1.3}px;
    font-size: ${tileSize / 2.2}px;
  }
`;
