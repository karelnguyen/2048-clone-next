import { colors } from 'constants/.';
import styled from 'styled-components';

export const StyledMessageBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${colors.mainBackground};
  border-radius: 10px;
  padding: 30px;
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const StyledScore = styled.span`
  font-size: 40px;
  font-weight: bold;
`;
