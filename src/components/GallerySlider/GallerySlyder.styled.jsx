import styled from 'styled-components';

export const SwiperArea = styled.div`
  @media screen and (max-width: 767px) {
    width: 216px;
    margin: 0 auto;
  }
`;

export const ControllersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  margin-top: 24px;
`;

export const SwiperImg = styled.img`
  display: block;
  width: 216px;
  height: 256px;
  @media screen and (min-width: 768px) {
    width: 284px;
    height: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 240px;
    height: 280px;
  }
`;

export const SwiperBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--main-font-color);
  font-family: 'BiroScript-PlusBold';
  font-size: 24px;
  line-height: 1.25;
`;
