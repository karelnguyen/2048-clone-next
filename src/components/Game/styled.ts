import styled from 'styled-components';
import { colors } from 'constants/.';

export const StyledBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTable = styled.table`
  background-color: ${colors.boardBackground};
  padding: 5px;
  border-radius: 10px;
`;
