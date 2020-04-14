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
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 9px;
      font-size: 14px;
      font-weight: bold;
      color: #444444;
    }
    input {
      height: 44px;
      border: 1px solid #ddd;
      background: #fff 0% 0% no-repeat padding-box;
      border-radius: 4px;
      padding: 15px;
      color: #999999;
      font-size: 16px;
    }

    .grid {
      display: flex;

      margin-left: 1.5%;
      margin-right: 1.5%;
      margin-top: 9px;
      padding: 5px;
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

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  input {
    display: absolute;
    width: 100%;
  }
`;

export const NumberComplement = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-left: 18px;
  input {
    width: 100%;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  input {
    width: 100%;
  }
`;

export const City = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  input {
    width: 100%;
  }
`;

export const StatePostalCode = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  margin-left: 18px;
  input {
    width: 100%;
  }
`;
