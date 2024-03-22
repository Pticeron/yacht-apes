import styled from 'styled-components';

export const Nav = styled.div`
  min-width: 344px;
  background-color: #DC3B5A;
  margin: 0 auto;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;


  @media (min-width: 736px) {
    width: 768px;
    
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
  width: 80px;
  height: 80px;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
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
