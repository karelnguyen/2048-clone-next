import styled from 'styled-components';
import { colors } from '../constants';

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.mainBackground};
  color: ${colors.fonts.dark};
`;

export const StyledWrapperTitle = styled.span`
  font-weight: 400;
  font-size: 60px;
`;

export const StyledCentered = styled.div<{ flexDir?: 'row' | 'column' }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ flexDir }) => flexDir ?? 'row'};
`;

export const StyledAuthButtons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 5px;
  margin-bottom: 10px;
`;

export const StyledDescription = styled.div`
  margin: 20px;
`;
