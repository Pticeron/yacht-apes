import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--primery-font-color);
  padding: 30px 64px 0;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    padding: 40px 72px 0;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    padding: 60px 84px 0 78px;
  }
`;