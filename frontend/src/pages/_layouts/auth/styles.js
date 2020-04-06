import styled from 'styled-components';

export const Wrapper = styled.div `
  height: 100%;
  background: #7d40e7 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div `
  width: 100%;
  max-width:360px;
  text-align: center;
  height:425px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;

    img{
      margin-top: 60px;
      height:44px;
    }

    form{
      display:flex;
      flex-direction: column;
      margin-top:30px;

      input{
        width: 300px;
        height: 44px;
        padding: 0 15px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #DDDDDD;
        border-radius: 4px;
        color: #999999;
        margin: 0px 30px 15px;

      }

      button{
        width: 300px;
        height: 45px;
        border-radius: 4px;
        margin: 0px 30px;
        font-weight: bold;
        font-size: 16px;

      }

      span{
        text-align: left;
        margin: 0 30px 9px;
        font-weight: bold;
        font-size: 14px;
      }
    }
`;