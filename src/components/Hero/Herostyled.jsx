import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  margin: 0 auto;
  background-color: black;

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;


export const Section = styled.section`
  position: relative;
  width: 344px;
  height: 612px;
  background-color: #dc3b5a;
  margin: 0 auto;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    width: 736px;
  }

  @media (min-width: 1440px) {
    width: 1408px;
  }
`;

export const Handwriting = styled.h4`
  position: absolute;
  top: 213px;
  left: 211px;
  font-family: 'Biro Script Plus';
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;

  @media (min-width: 736px) {
    font-size: 20px;
    line-height: 33px;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

export const TwoHandwritihg = styled(Handwriting)`
  margin-bottom: 6px;
  top: 447px;
  left: 331px;
`;

export const Title = styled.h1`
  position: absolute;
  top: 253px;
  left: 211px;

  font-family: 'Right Grotesk';
  font-weight: 900;
  font-size: 44px;
  line-height: 44px;
  margin-bottom: 8px;

  @media (min-width: 736px) {
    font-size: 92px;
    line-height: 92px;
  }

  @media (min-width: 1440px) {
    font-size: 164px;
    line-height: 164px;
  }
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
    position: absolute;
    z-index: 100;
    top: 81px;
    left: 461px;
`;

export const Button = styled.button`
position: absolute;
display: inline-block;
  width: 216px;
  border-style: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 70px 12px 70px;
  background: rgba(30, 30, 30, 0.1);
  margin-bottom: 12px;

  font-family: 'Right Grotesk';
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;

  @media (mix-width: 736px) {
    width: 190px;
    padding: 10px 61px 12px 61px;
    border-radius: 12px;
  }

  @media (min-width: 1440px) {
    top: 542px;
    left: 895px;

    width: 337px;
    padding: 16px 109px 20px 109px;
    font-size: 28px;
    line-height: 34px;
  }
`;

export const Text = styled.p`
  position: absolute;
  top: 457px;
  left: 895px;

  display: block;
  width: 217px;
  font-family: 'Messina Sans Mono';
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;

  @media (mix-width: 736px) {
    width: 190px;
    text-align: justify;
  }

  @media (min-width: 1440px) {
    width: 400px;
    text-align: justify;
    font-size: 19px;
    line-height: 16px;
  }
`;
