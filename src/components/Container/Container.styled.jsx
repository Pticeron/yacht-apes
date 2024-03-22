import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 360px;
  margin: 0 auto;
  background-color: black;
  padding-top: 54px;
 
  @media (min-width: 768px) {
    width: 768px;
  };

  @media (min-width: 1440px) {
    width: 1440px;
    padding-top: 16px;
  }
`;
