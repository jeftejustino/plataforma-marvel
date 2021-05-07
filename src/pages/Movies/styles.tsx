import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 0px 80px;
`;

export const Filter = styled.div`
  position: relative;
  z-index: 2;
  padding: 0px 0px 20px 120px;
  > div {
    max-width: 165px;
  }
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 800px) {
    padding: 0px 0px 20px 0px;
    text-align: center;
    > div {
      margin: auto;
    }
  }
`;
