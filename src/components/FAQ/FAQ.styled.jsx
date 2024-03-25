import styled from 'styled-components';

export const FaqList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 18px;
  }
  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const FaqListItem =
  styled.li >
  `
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 8px;
  border-radius: 12px;
  width: 100%;
  background-color: ${({ $active }) =>
    $active === 'active' ? 'var(--secondary-background-color)' : 'transparent'};
  &:hover h3,
  &:focus h3 {
    color: var(--accent-color);
  }
  &:hover button,
  &:focus button {
    color: var(--primery-font-color);
  }
  h3 {
    color: ${({ $active }) =>
      $active === 'active' ? 'var(--accent-color)' : 'var(--main-font-color)'};
  }
  @media screen and (min-width: 768px) {
    position: relative;
    justify-content: flex-end;
    gap: 24px;
    padding: 24px;
  }
`;

export const FaqImg =
  styled.img >
  `
  display: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 20px;
    top: -10px;
    display: ${({ $active }) => ($active === 'active' ? 'block' : 'none')};
    width: 148px;
    height: 183px;
    transform: rotate(-16deg);
  }
  @media screen and (min-width: 1280px) {
    width: 248px;
    height: 282px;
    transform: rotate(-8deg);
  }
`;

export const FaqButton = styled.button`
  border: none;
  background: transparent;
  margin-top: 4px;
  color: ${({ $active }) =>
    $active === 'active' ? 'var(--primery-font-color)' : 'var(--accent-color)'};
  font-family: 'Biro Script Plus-Bold';
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-wrap: nowrap;
  white-space: nowrap;
  width: 23px;
  height: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    font-size: 16px;
    line-height: 27px;
    width: 30px;
    height: 27px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 12px;
    font-size: 24px;
    line-height: 40px;
    width: 45px;
    height: 40px;
  }
`;

export const FaqQuestionWrapper = styled.div`
  display: flex;
  min-width: 169px;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 768px) {
    width: 339px;
  }
  @media screen and (min-width: 1280px) {
    width: 635px;
    gap: 24px;
  }
`;

export const FaqQuestion = styled.h3`
  cursor: pointer;
  color: var(--main-font-color);
  font-family: 'Right Grotesk';
  font-size: 20px;
  font-weight: 900;
  line-height: 1;
  text-align: left;
  text-transform: uppercase;
  transition: all var(--transition-dur-and-func);
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
  }
  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 1;
  }
`;

export const FaqDeckription = styled.p`
  font-family: 'Messina Sans Mono';
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: left;
  text-transform: uppercase;
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;
