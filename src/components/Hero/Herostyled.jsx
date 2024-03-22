import styled from 'styled-components';

export const Section = styled.section`
  min-width: 344px;
  background-color: #dc3b5a;
  margin: 0 auto;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  @media (min-width: 736px) {
    width: 768px;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 1408px;
}
`;

export const Handwriting = styled.h4`
font-family: 'Biro Script Plus';
font-weight: 400;
font-size: 16px;
line-height: 27px;
`;

export const Title = styled.h1`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 44px;
line-height: 44px;
`;

export const HeroImg = styled.img`
  width: 216px;
  height: 284px;

  @media (min-width: 736px) {
    width: 283px;
    height: 386px;
  }

  @media (min-width: 1440px) {
    width: 463px;
    height: 612px;
  }

`;
