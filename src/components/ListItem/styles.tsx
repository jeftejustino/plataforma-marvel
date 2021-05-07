import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  position: relative;
`;

export const Actions = styled.div`
  color: #fff;

  .back {
    position: absolute;
    left: 0px;
    top: calc(50% - 15px);
  }

  .next {
    position: absolute;
    right: 0px;
    top: calc(50% - 15px);
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 140px;
`;
