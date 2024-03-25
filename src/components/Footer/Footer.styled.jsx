import styled from 'styled-components';

export const FooterSection = styled.footer`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--main-font-color);
  padding: 30px 64px 0;
  @media screen and (min-width: 768px) {
    padding: 30px 72px 0;
    margin-top: 80px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    padding: 30px 84px 0 78px;
    margin-top: 120px;
  }
`;

export const Copyright = styled.p`
  font-family: 'MessinaSansMono-Regular';
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;