import styled from 'styled-components';
import { colors } from 'constants/.';

export const Button = styled.button<{ dark?: true }>`
  background-color: ${({ dark }) => (dark ? colors.button.default : 'white')};
  color: ${({ dark }) => (dark ? colors.fonts.light : colors.fonts.dark)};
  border: ${({ dark }) =>
    dark ? 'none' : `2px solid ${colors.boardBackground}`};
  border-radius: 5px;
  padding: 10px 20px;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    color: ${colors.fonts.dark};
  }
`;
