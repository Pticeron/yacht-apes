import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-width: 216px;
  @media screen and (min-width: 480px) {
    width: 336px;
  }
  @media screen and (min-width: 768px) {
    width: 592px;
  }
  @media screen and (min-width: 1280px) {
    width: 1032px;
  }
`;
