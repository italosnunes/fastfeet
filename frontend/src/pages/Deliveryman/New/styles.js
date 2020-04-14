import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  margin: 30px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Content = styled.div`
  background: #fff;
  max-width: 1300px;
  height: 401px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
      margin-left: 30px;
      font-size: 14px;
      font-weight: bold;
      color: #444444;
    }

    input {
      height: 44px;
      padding: 0 15px;
      border: 1px solid #ddd;
      background: #fff 0% 0% no-repeat padding-box;
      margin-left: 30px;
      margin-bottom: 18px;
      margin-top: 5px;
      margin-right: 30px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  margin-left: 15px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  background: ${(props) => (props.secondary ? '#CCCCCC' : '#7D40E7')};

  svg {
    margin-right: 5px;
  }
`;

export const Title = styled.strong`
  height: 32px;
  font-size: 24px;
  font-weight: bold;
  color: #444;
  margin-bottom: 34px;
`;
