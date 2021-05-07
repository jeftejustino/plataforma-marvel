import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Actions = styled.div`
  color: #fff;

  .back {
    position: absolute;
    left: 30px;
    top: calc(50% - 15px);
  }

  .next {
    position: absolute;
    right: 30px;
    top: calc(50% - 15px);
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0px 100px;
`;

export const Loading = styled.div`
  flex-grow: 1;
  > div > span {
    display: flex;
    justify-content: space-around;
    > span {
      border-radius: 35px;
    }
  }
`;
