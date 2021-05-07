import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  .basic-single {
    .select__control {
      height: 44px;
      background: #000;
      border: 1px solid #f00;
      border-radius: 25px;
      box-shadow: none;
      .select__single-value {
        color: #f00;
      }
      .select__indicator-separator {
        display: none;
      }
      .select__indicator {
        color: #f00;
      }
    }
    .select__control--menu-is-open {
      border-bottom: none;
      border-radius: 25px 25px 0px 0px;
    }
    .select__menu {
      margin-top: -2px;
      border-radius: 0px 0px 25px 25px;
      padding: 0px 0px;
      overflow: hidden;
      background: #000;
      border-bottom: 1px solid #f00;
      border-left: 1px solid #f00;
      border-right: 1px solid #f00;

      .select__menu-list {
        .select__option {
          background: none;
          color: #f00;
        }
      }
    }
  }
`;
