import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  margin: 30px auto;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.strong`
  height: 32px;
  font-size: 24px;
  font-weight: bold;
  color: #444;
  margin-bottom: 34px;
`;
export const Menu = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 10px;
    margin-left: 3px;
  }

  input {
    height: 36px;
    width: 240px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #999;
    padding: 0 40px;
    margin-bottom: 22px;

    &::placeholder {
      color: #999;
    }
  }

  button {
    width: 142px;
    height: 36px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Table = styled.table`
  border-spacing: 0px;
`;
export const TableHeader = styled.tr`
  height: 32px;

  td {
    color: #444;
    font-weight: bold;
    font-size: 16px;
  }
`;

export const Espaco = styled.div`
  height: 20px;
`;

export const TableItem = styled.tr`
  background: #fff;
  color: #666666;
  font-size: 16px;
  border-radius: 4px;
  height: 57px;
  margin-bottom: 200px;

  td {
    color: #666666;
    font-size: 16px;
  }
`;

export const ID = styled.td`
  text-align: center;
  width: 110px;

  strong: {
    color: #666;
  }
`;

export const Picture = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 57px;
  width: 150px;
  font-size: 16px;
  color: #666666;
`;

export const Actions = styled.td`
  text-align: center;
  width: 2px;

  strong {
    color: #c6c6c6;
  }
`;
