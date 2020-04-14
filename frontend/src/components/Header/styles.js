import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border: solid 1px #ddd;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 135px;
      height: 26px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #ddd;
    }
  }

  a {
    font-weight: bold;
    color: #999999;
    margin-left: 21px;

    &:focus {
      color: #000;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      font-size: 14px;
      font-weight: bold;
      color: #666666;
    }

    button {
      display: block;
      margin-top: 2px;
      font-size: 14px;
      background: transparent;
      border: none;
      color: #de3b3b;
    }
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
