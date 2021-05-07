import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  display: flex;
  justify-items: end;
  box-shadow: 0px -5px 5px 5px #ff0000;
  position: relative;
  z-index: 1;
`;

export const Logo = styled.div`
  flex-grow: 1;
  padding: 35px 0px 25px 55px;
  img {
    width: 122px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-right: 86px;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    opacity: 0.25;
    transition: 0.1s all;

    :hover {
      opacity: 1;
    }
  }
  a.active {
    opacity: 1;
  }
`;

export const Profile = styled.div`
  padding: 0px 55px 0px 0px;
  display: flex;
  align-items: center;

  a {
    margin-left: 15px;
    color: #e5e5ea;
    opacity: 0.25;
    font-size: 20px;
    font-weight: 200;
    transition: 0.1s all;

    :hover {
      opacity: 0.75;
    }
  }
`;
