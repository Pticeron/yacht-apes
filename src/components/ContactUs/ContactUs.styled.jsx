import styled from 'styled-components';

export const MindWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  svg {
    width: 36px;
    height: 36px;
  }
  @media screen and (min-width: 768px) {
    width: 397px;
    gap: 24px;
  }
  @media screen and (min-width: 1280px) {
    width: 581px;
    gap: 40px;
  }
`;

export const MindText = styled.p`
  font-family: 'MessinaSansMono-Regular';
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.2;
  }
`;
