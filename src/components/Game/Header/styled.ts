import styled from 'styled-components';

export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledTitle = styled.h1`
  font-size: 80px;
  margin: 10px 0;

  @media only screen and (max-width: 600px) {
    font-size: 60px;
  }
`;

export const LabelWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 5px;
`;

export const StyledHeader = styled.div`
  margin-bottom: 100px;
  @media only screen and (max-width: 600px) {
    padding: 30px;
  }
`;

export const StyledSubtitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
