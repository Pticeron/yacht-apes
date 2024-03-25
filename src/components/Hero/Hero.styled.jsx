import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 542px;
  margin-top: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--accent-color);
  color: var(--secondary-font-color);
  border-radius: 12px;
  padding: 36px 64px 19px;

  @media screen and (min-width: 768px) {
    height: 421px;
    padding: 124px 72px 35px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 16px;
    height: 677px;
    padding: 197px 84px 81px 78px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: 'Right Grotesk';
  font-size: 44px;
  font-weight: 900;
  line-height: 44px;
  margin-bottom: 8px;
  text-align: center;
  text-wrap: nowrap;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 92px;
    line-height: 92px;
    word-spacing: 50px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 164px;
    line-height: 164px;
    word-spacing: 115px;
    margin-bottom: 40px;
  }
`;

export const HeroQuestion = styled.p`
  font-family: 'Biro Script Plus-Bold';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 6px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 33px;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

export const HeroPicture = styled.picture`
  margin-bottom: -4px;
  img {
    margin: 0 auto;
    display: block;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 206px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    left: 50%;
    transform: translateX(-55%);
  }
`;

export const HeroBtn = styled.a`
  width: 216px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-wrap: nowrap;
  white-space: nowrap;
  padding: 10px 70px 12px;
  border-radius: 8px;
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);
  color: var(--secondary-font-color);
  font-family: 'Right Grotesk';
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  margin-bottom: 12px;
  transition: all var(--transition-dur-and-func);
  &:hover,
  &:focus {
    color: var(--primery-font-color);
  }
  @media screen and (min-width: 768px) {
    width: 190px;
    padding: 10px 61px 12px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 338px;
    font-size: 28px;
    line-height: 34px;
    padding: 16px 109.5px;
  }
`;

export const HeroDescription = styled.p`
  font-family: 'Messina Sans Mono';
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    text-align: justify;
    text-indent: 80px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 19px;
    text-indent: 40px;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 120px;
  }
`;

export const DeckWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    width: 190px;
    gap: 16px;
    flex-direction: column-reverse;
  }
  @media screen and (min-width: 1280px) {
    width: 338px;
  }
`;
