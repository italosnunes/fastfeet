import styled from 'styled-components';

export const ContainerModal = styled.div`
  width: 450px;
  height: 355px;
  background: #fff no-repeat padding-box;
  padding: 30px;
  box-shadow: 0 0 10px #00000033;
  border-radius: 4px;
  opacity: 1;

  div {
    margin-bottom: 5px;
  }
  strong {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
  }

  small {
    margin-left: 5px;
    font-size: 14px;
  }

  p {
    padding: 5px 0;
  }

  hr {
    border: 0;
    height: 1px;
    background: #eee padding-box;
    margin: 10px 0 20px;
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;
  background: none;
  border: 0;
  color: #c6c6c6;
  font-size: 16px;
  font-weight: bold;
`;

export const Menu = styled.div`
  position: absolute;
  background: #fff no-repeat padding-box;
  width: 200px;
  left:-70px;
  top: 30px;
  padding: 5px 5px;
  box-shadow: 0px 0px 2px #00000026;
  border-radius: 4px;

  display: ${(props) => (props.visible ? 'block' : 'none')};
  opacity: 1;

    &::before {
      content:'';
      position: absolute;
      left: 75px;
      top: -15px;
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 20px solid #fff;

    }
`;

export const MenuItem = styled.button`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  align-items: center;
  
  
  text-align: left;
  background: #fff;
  color: #999999;
  font-size: 16px;
  padding: 7px;
  border-bottom: solid 1px #f5f5f5;

  svg {
    margin-right: 3px;
  }
`;
