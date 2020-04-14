import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  height: 425px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;

  img {
    margin-top: 55px;
    height: 44px;
    margin-bottom: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      width: 300px;
      height: 44px;
      padding: 0 15px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      color: #999999;
      margin: 0px 30px 10px;
      font-size: 14px;
    }

    button {
      width: 300px;
      height: 45px;
      border-radius: 4px;
      margin: 0px 30px;
      font-weight: bold;
      font-size: 16px;
      border: 0;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7D40E7')};
      }
    }

    p {
      text-align: left;
      margin: 0px 30px 9px;
      font-weight: bold;
      font-size: 14px;
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 32px 12px;
      font-size: 12px;
      font-weight: bold;
    }
  }
`;
