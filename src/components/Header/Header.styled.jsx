import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderSection = styled.header`
  position: fixed;
  z-index: 10;
  pointer-events: none;
  top: 54px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    top: 16px;
  }
`;

export const HeaderContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 12px;
  }
  @media screen and (min-width: 1280px) {
    padding: 24px;
    width: 1248px;
  }
`;

export const LogoLink = styled(NavLink)`
  pointer-events: auto;
  padding: 8px 0;
  svg {
    width: 48px;
    height: 32px;
    path {
      fill: var(--secondary-font-color);
      transition: fill var(--transition-dur-and-func);
    }
    &:hover path,
    &:focus path {
      fill: var(--main-font-color);
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding: 15px 0;
    svg {
      width: 72px;
      height: 50px;
    }
  }
`;
