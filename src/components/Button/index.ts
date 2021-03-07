import styled from 'styled-components';
import { colors } from 'constants/.';

const colorMapper = (disabled: boolean, dark: boolean) => {
  if (disabled) return 'black';
  return dark ? colors.button.default : 'white';
};

export const Button = styled.button<{ dark?: true }>`
  background-color: ${({ disabled, dark }) => colorMapper(disabled, dark)};
  color: ${({ dark }) => (dark ? colors.fonts.light : colors.fonts.dark)};
  border: ${({ dark }) => (dark ? 'none' : `2px solid ${colors.boardBackground}`)};
  border-radius: 5px;
  padding: 10px 20px;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.8)};
  }
  &:active {
    color: ${colors.fonts.dark};
  }
`;
