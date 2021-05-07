import styled from 'styled-components';
import background from '@base/assets/images/background.png';

export const Container = styled.div`
  /* position: relative; */
`;

export const Form = styled.form`
  max-width: 383px;
  margin-left: 150px;
  padding: 90px 0px;

  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

export const FormAnimation = styled.div`
  animation-name: form-opacity;
  opacity: 0;
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  position: absolute;

  @keyframes form-opacity {
    0% {
      opacity: 0;
    }

    99% {
      opacity: 1;
    }

    100% {
      position: relative;
      opacity: 1;
    }
  }
`;
export const Logo = styled.div`
  text-align: center;
  height: 95px;
  img {
    width: 237px;
    position: absolute;
    animation-duration: 2.5s;
    top: 90px;
    left: 223px;
    transform: translate(0%, 0%);
    @media (max-width: 800px) {
      top: 90px;
      left: 50%;
      transform: translate(-50%, 0%);
    }
  }

  .animationLogo {
    animation-name: logo-move;
  }
  .animationLogoMobile {
    animation-name: logo-move2;
  }

  @keyframes logo-move {
    0% {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    20% {
      left: 50%;
      top: 50%;
      transform: translate(-40%, -50%);
    }

    40% {
      left: 223px;
      top: 50%;
      transform: translate(0%, -50%);
    }

    60% {
      left: 223px;
      top: 50%;
      transform: translate(0%, -50%);
    }

    100% {
      top: 90px;
      left: 223px;
      transform: translate(0%, 0%);
    }
  }

  @keyframes logo-move2 {
    0% {
      opacity: 0;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    20% {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    40% {
      opacity: 1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    60% {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    100% {
      top: 90px;
      left: 50%;
      transform: translate(-50%, 0%);
    }
  }
`;

export const Wellcome = styled.div`
  color: #ff0000;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 16px;
  margin-top: 58px;
`;

export const Access = styled.div`
  color: #84848d;
  font-size: 20px;
  font-weight: 200;
  margin-bottom: 20px;
`;

export const Inputs = styled.div`
  > div {
    margin-bottom: 18px;
  }
`;

export const SaveLoginForgot = styled.div`
  font-size: 15px;
  color: #84848d;
  font-weight: normal;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;

  a {
    color: #84848d;
    border-bottom: 1px solid #f00;
  }
`;

export const NotRegistered = styled.div`
  margin-top: 30px;
  font-size: 15px;
  color: #84848d;
  font-weight: normal;

  a {
    color: #ff0000;
  }
`;

export const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 0;
  /* transition: all 1s ease 0s; */
  animation-name: background-opacity;
  animation-duration: 1s;

  @keyframes background-opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

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
    background: rgb(2, 0, 36);
    background: -moz-linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 212, 255, 0) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 212, 255, 0) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 212, 255, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
  }
`;
