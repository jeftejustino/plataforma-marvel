import styled from 'styled-components';
import background from '@base/assets/images/background.png';

export const Container = styled.div`
  background: #000;
  min-height: 100%;
  position: relative;
`;
export const Content = styled.div`
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  height: calc(100% - 115px);
  width: 100%;
  z-index: 0;

  :before {
    content: '';
    background-image: url(${background});
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 50%;
    left: 50%;
    top: 0%;
    z-index: 1;
  }

  :after {
    content: '';
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    background: -moz-linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0.739670868347339) 60%,
      rgba(0, 0, 0, 0.7592787114845938) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0.739670868347339) 60%,
      rgba(0, 0, 0, 0.7592787114845938) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0.739670868347339) 60%,
      rgba(0, 0, 0, 0.7592787114845938) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
  }
`;
