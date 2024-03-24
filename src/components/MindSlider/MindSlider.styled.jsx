import styled from 'styled-components';

export const SwiperArea = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ControllersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  margin-top: 24px;
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
  line-height: 1;
`;

export const Card = styled.div`
  padding: 24px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--secondary-background-color);
  color: var(--main-font-color);
  height: 242px;
  a {
    background-color: var(--accent-color);
  }
  @media screen and (min-width: 768px) {
    padding: 24px;
    border-radius: 16px;
  }
  @media screen and (min-width: 1280px) {
    height: 480px;
  }
`;

export const LinkCard = styled.div`
  padding: 24px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--accent-color);
  color: var(--main-font-color);
  height: 242px;
  position: relative;
  &:hover svg,
  &:focus svg {
    top: 0;
    right: 0;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }
  svg {
    position: absolute;
    top: 12px;
    right: 12px;
    margin-left: auto;
    width: 48px;
    height: 48px;
    transition: all var(--transition-dur-and-func);
  }
  @media screen and (min-width: 768px) {
    padding: 24px;
    border-radius: 16px;
  }
  @media screen and (min-width: 1280px) {
    height: 480px;
    svg {
      margin-left: auto;
      width: 64px;
      height: 64px;
    }
  }
`;
