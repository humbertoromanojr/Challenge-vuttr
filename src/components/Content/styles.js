import styled from 'styled-components';

import DeleteIcon from '../../assets/images/delete2.svg';
import CloseIcon from '../../assets/images/close.svg';
import AddIcon from '../../assets/images/plus.svg';
import InputSearchIcon from '../../assets/images/search.svg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    align-content: center;
    width: 520px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  width: 520px;
  margin-bottom: 15px;
`;

export const InputSearch = styled.div`
  display: flex;
  align-items: left;
  font-size: 15px;
  height: 12px;
  width: 90px;
  border: solid 2px #666;
  padding: 0px 7px 6px 26px;
  background: url(${InputSearchIcon}) no-repeat 7px center;

  input {
    flex: 1;
    font-size: 13px;
    color: #121212;
    border: 0;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: left;

  small {
    margin-top: 2px;
  }
`;

export const ButtonAddHome = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  height: 22px;
  border: solid 2px #666;
  width: 70px;
  /* push checkbox left */
  margin-left: 170px;

  input {
    width: 70px;
    height: 22px;
    border: 0;
    background: #fff url(${AddIcon}) no-repeat 7px center;
  }
`;

export const Close = styled.a`
  font-size: 10px;
  background: url(${CloseIcon}) no-repeat 7px center;

  a {
    font-size: 14px;
    text-decoration: none;
    padding-left: 50px;
    color: #222;
  }
`;

export const ToolsListItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-content: center;
  flex-direction: column;
  padding: 10px;
  height: 150px;
  width: 500px;
  box-shadow: 2px 1px 2px 1px #454545;
  background-color: #fff;

  margin-bottom: 20px;
`;

export const AlignHorizontal = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  button {
    width: 70px;
    height: 22px;
    border: 0;
    box-shadow: 2px 1px 2px 1px #454545;
    background-color: #fff;
  }

  input {
    border: 0;
    background-color: #fff;
  }
`;

export const AlignHorizontalRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;

  button {
    height: 22px;
    border: 0;
    margin-right: 10px;
    box-shadow: 1px 2px 1px 2px #121212;
    background-color: #fff;
  }
`;

export const Delete = styled.div`
  display: flex;
  align-content: right;
  align-items: right;
  font-size: 13px;
  height: 22px;

  input {
    height: 22px;
    border: 0;
    align-content: right;
    align-items: right;
    box-shadow: 1px 2px 1px 2px #121212;
    background-color: #fff;
  }
`;

export const Description = styled.div`
  display: flex;
  flex: 1;
  font-size: 16;
  color: #666;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Tags = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
  font-size: 18;
  font-weight: bold;
  color: #222;
`;

export const ContainerModalDelete = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 20px;

  form {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`;

export const HeaderModalDelete = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: left;
`;
