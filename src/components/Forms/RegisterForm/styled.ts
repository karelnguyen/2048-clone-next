import styled from 'styled-components';
import { colors } from 'constants/.';

export const StyledFormWrapper = styled.div`
  border: 1px solid ${colors.boardBackground};
  padding: 30px;
  margin-top: 50px;
`;

export const StyledInputBox = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 15px;

  > span {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 15px;

    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
