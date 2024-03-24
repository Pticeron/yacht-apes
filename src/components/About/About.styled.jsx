import styled from 'styled-components';

export const AboutSection = styled.section`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--main-font-color);
  padding: 30px 64px 52px;
  @media screen and (min-width: 768px) {
    padding: 30px 72px 52px;
    margin-top: 80px;
  }
  @media screen and (min-width: 1280px) {
    padding: 30px 84px 86px 78px;
    margin-top: 120px;
  }
`;

export const TitleWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 48px;
  }
`;

export const AboutTitle = styled.h2`
  font-family: 'RightGrotesk-CompactBlack';
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 16px;
  span {
    color: var(--accent-color);
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    flex: 1;
    font-size: 60px;
    line-height: 1;
    margin-bottom: 68px;
    br {
      display: none;
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 120px;
    line-height: 1;
  }
`;

export const AboutDescription = styled.p`
  color: rgb(255, 255, 255);
  font-family: 'MessinaSansMono-Regular';
  font-size: 16px;
  line-height: 1.19;
  text-align: right;
  text-transform: uppercase;
  margin-bottom: 36px;
  text-indent: 136px;
  br {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 275px;
    text-indent: 0;
    margin-top: 16px;
    br {
      display: block;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 409px;
    font-size: 24px;
    line-height: 1.2;
    margin-top: 24px;
  }
`;

export const SecondPartWrapper = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  p {
    font-family: 'MessinaSansMono-Regular';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    width: 269px;
    gap: 24px;
    margin-bottom: 36px;
    p {
      font-size: 16px;
      line-height: 19px;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 417px;
    gap: 36px;
    margin-bottom: 40px;
    p {
      font-size: 24px;
      line-height: 29px;
    }
    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export const AboutImg = styled.picture`
  img {
    display: block;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 0;
    bottom: 0;
    img {
      display: block;
      margin: 0 0 0 auto;
    }
  }

  @media screen and (min-width: 1280px) {
  }
`;
