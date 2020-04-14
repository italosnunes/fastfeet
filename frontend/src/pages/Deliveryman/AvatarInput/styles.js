import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 150px;
      width: 150px;
      margin-top: 28px;
      margin-bottom: 23px;
      border-radius: 50%;
      background: #fff 0% 0% no-repeat padding-box;
      border: 1px dashed #ddd;
    }

    input {
      display: none;
    }
  }
`;
