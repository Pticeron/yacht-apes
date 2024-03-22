import styled from 'styled-components';

export const Container = styled.div`
position: relative;
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
  
  width: 344px;
 
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
    height: 421px;
  }

  @media (min-width: 1440px) {
    width: 1408px;
    height: 677px;
  }
`;

export const Handwriting = styled.h4`
  font-family: 'Biro Script Plus';
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;

  @media (min-width: 768px) {
    position: absolute;
    top: 124px;
    left: 72px;
    font-size: 20px;
    line-height: 33px;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 40px;
    top: 133px;
  left: 211px;
  }
`;

export const TwoHandwritihg = styled(Handwriting)`
margin-bottom: 6px;

@media (min-width: 768px) {
  position: absolute;
  top: 265px;
  left: 72px;
}

@media (min-width: 1440px) {
    top: 367px;
  left: 331px;
}
`;

export const Title = styled.h1`
  font-family: 'Right Grotesk';
  font-weight: 900;
  font-size: 44px;
  line-height: 44px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    position: absolute;
    top: 157px;
    left: 73px;
    font-size: 92px;
    line-height: 92px;
  }

  @media (min-width: 1440px) {
  top: 173px;
  left: 211px;
    font-size: 164px;
    line-height: 164px;
  }
`;

export const HeroImg = styled.img`
  width: 216px;
  height: 284px;

  @media (min-width: 768px) {
    position: absolute;
    z-index: 100;
    top: 35px;
    left: 206px;
    width: 283px;
    height: 386px;
  }

  @media (min-width: 1440px) {
    width: 463px;
    height: 612px;
    top: 65px;
    left: 461px;
`;

export const Button = styled.button`
display: block;
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

  

  @media (mix-width: 768px) {
    position: absolute;
    top: 399px;
  left: 490px;
    width: 190px;
    padding: 10px 61px 12px 61px;
    border-radius: 12px;
  }

  @media (min-width: 1440px) {
    position: absolute;
    top: 526px;
    left: 879px;

    width: 337px;
    padding: 16px 109px 20px 109px;
    font-size: 28px;
    line-height: 34px;
  }
`;

export const Text = styled.p`
  width: 217px;
  font-family: 'Messina Sans Mono';
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  text-align-last: center;
  
 
  @media (mix-width: 768px) {
    top: 327px;
    left: 490px;
    width: 190px;
    
  }

  @media (min-width: 1440px) {
    position: absolute;
    top: 457px;
    left: 895px;
    width: 400px;
    text-align: justify;
    font-size: 19px;
    line-height: 16px;
    text-indent: 100px;
  }
`;
