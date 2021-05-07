import styled from 'styled-components';

export const Container = styled.div<{
  loading: boolean;
  showInfo: boolean;
}>`
  color: #fff;
  max-width: 289px;
  position: relative;
  width: 289px;
  height: 439px;
  transition: 0.1s all;

  opacity: ${props => (props.loading ? '0.5' : '1')};
  z-index: ${props => (props.showInfo ? '5' : '1')};

  :before {
    opacity: ${props => (props.showInfo ? '1' : '0')};
    content: '';
    transition: 0.3s opacity;
    position: fixed;
    top: 0px;
    left: 0px;
    width: ${props => (props.showInfo ? '100%' : '0%')};
    height: ${props => (props.showInfo ? '100%' : '0%')};
    background: rgb(0, 0, 0);
    background: -moz-linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 51%,
      rgba(0, 0, 0, 0.7956932773109244) 71%,
      rgba(0, 0, 0, 0) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 51%,
      rgba(0, 0, 0, 0.7956932773109244) 71%,
      rgba(0, 0, 0, 0) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 51%,
      rgba(0, 0, 0, 0.7956932773109244) 71%,
      rgba(0, 0, 0, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
  }

  .showOpacity {
    opacity: 1;
    width: 660px;
    transition: 0.3s opacity;
  }
  .hideOpacity {
    opacity: 0;
  }
`;

export const Content = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 35px;
  width: 100%;
  height: 100%;
`;

export const Info = styled.div`
  transition: 0.3s all;
  border-radius: 25px;
  padding: 25px 25px;
  position: absolute;
  bottom: 0px;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 235px;
  background: rgb(255, 0, 0);
  background: -moz-linear-gradient(
    180deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(128, 0, 0, 0.6612394957983193) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(128, 0, 0, 0.6612394957983193) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(128, 0, 0, 0.6612394957983193) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff0000",endColorstr="#800000",GradientType=1);

  .name {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .description {
    text-align: left;
    font-size: 12px;
    line-height: 20px;
    flex-grow: 1;
    font-weight: 200;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 15px;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  .more {
    font-size: 20px;
    font-weight: 300;
    color: #fff;
  }
`;

export const MoreInfo = styled.div<{
  first: boolean;
}>`
  overflow: hidden;
  background: rgb(255, 0, 0);
  background: -moz-linear-gradient(
    ${props => (props.first ? '90deg' : '180deg')},
    rgba(255, 0, 0, 1) 0%,
    rgba(64, 14, 14, 1) 100%
  );
  background: -webkit-linear-gradient(
    ${props => (props.first ? '90deg' : '180deg')},
    rgba(255, 0, 0, 1) 0%,
    rgba(64, 14, 14, 1) 100%
  );
  background: linear-gradient(
    ${props => (props.first ? '90deg' : '180deg')},
    rgba(255, 0, 0, 1) 0%,
    rgba(64, 14, 14, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff0000",endColorstr="#400e0e",GradientType=1);
  opacity: 0;
  position: absolute;
  width: 0px;
  ${props => (props.first ? 'left: 0px;' : 'right: 0px;')};
  padding: ${props =>
    props.first ? '60px 38px 20px 328px;' : '60px 328px 20px 38px;'};
  border-radius: 35px;
  height: 100%;
  transition: 0.3s opacity, 2s width;
  display: flex;
  flex-direction: column;

  .name {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .description {
    flex-grow: 1;
    font-size: 12px;
    font-weight: 200;
    overflow: auto;
    margin-bottom: 10px;

    .title {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .rate {
    font-size: 26px;
  }

  .stars {
    > * {
      margin-right: 5px;
    }
  }

  .close {
    position: absolute;
    bottom: 5px;
    right: 15px;
    z-index: 2;
  }

  .whereFound {
    .title {
      font-size: 12px;
    }

    .links {
      margin-left: -10px;
    }
  }

  @media (max-width: 830px) {
    z-index: 2;
    padding: 30px 40px;
    max-width: 100%;
  }
`;
