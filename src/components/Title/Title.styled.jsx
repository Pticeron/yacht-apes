import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'RightGrotesk-CompactBlack';
  font-size: 44px;
  font-weight: 900;
  line-height: 0.9;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 1;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 160px;
    line-height: 1;
    margin-bottom: 80px;
  }
`;
