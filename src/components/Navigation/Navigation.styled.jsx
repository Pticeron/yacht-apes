import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
  width: 344px;
  display: flex;
  background-color: #dc3b5a;
  margin: 0 auto;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  @media (min-width: 768px) {
    width: 736px;
  }
  @media (min-width: 1440px) {
    display: flex;
    width: 1408px;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  width: 48px;
  height: 32px;

  @media (min-width: 1440px) {
    width: 72px;
    height: 50px;
  }
`;

export const List = styled.ul`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  display: flex;
  width: 48px;
  height: 48px;

  @media (min-width: 1440px) width: 80px;
  height: 80px;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Messina Sans Mono';
  font-wight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #1e1e1e;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;

export const IconDiv = styled.ul`
  display: flex;
`;

export const IconItem = styled.li`
  width: 48px;
  hieght: 48px;
`;

export const Icon = styled.img`
  width: 16px;
  hieght: 16px;
`;
