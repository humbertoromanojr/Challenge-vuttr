import styled from 'styled-components';

import CloseIcon from '../../assets/images/close.svg';
import AddIcon from '../../assets/images/plus.svg';
import InputSearchIcon from '../../assets/images/search.svg';
import EditIcon from '../../assets/images/share.svg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  background: #ccc;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    align-content: center;
    width: 620px;
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
  width: 620px;
  box-shadow: 2px 1px 2px 1px #454545;
  background-color: #fff;

  margin-bottom: 20px;
`;


export const HeaderForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 620px;
  margin-bottom: 15px;
`;

export const InputSearch = styled.div`
  display: flex;
  align-items: left;
  font-size: 15px;
  height: 16px;
  width: 110px;
  margin-top: 5px;
  border: solid 2px #666;
  padding: 5px 7px 5px 26px;
  background: #fff url(${InputSearchIcon}) no-repeat 7px center;

  input {
    flex: 1;
    font-size: 16px;
    color: #121212;
    padding: 5px;
    border: 0;
  }
`;

export const FormModal = styled.div`
  display: flex;
  flex: 1;
  align-items: left;
  padding: 20px;

  span {
    display: flex;
    flex: 1;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    margin-bottom: 10px;
  }

  textarea {
    width: 100%;
    margin-bottom: 10px;
  }

  label {
    margin-top: 10px;
    padding-top: 10px;
  }

  button {
    align-items: right;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: left;

  small {
    margin-top: 2px;
  }
`;

export const ContainerButtonTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  height: 22px;

  div {
    padding-left: 20px;
  }

  a {
    padding-left: 5px;
    text-decoration: none;
    font-size: 13px;
    color: #222;
  }

  img {
    width: 12px;
    height: 12px;
    margin-right: 0px;
  }
`;

export const HeaderFormButtons = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  p {
    font-size: 18px;
    padding-left: 5px;
  }

  img {
    width: 12px;
    height: 12px;
    margin-right: 10px;
  }

`;

export const ButtonAddHome = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  height: 22px;
  border: solid 1px #666;
  width: 90px;
  /* push checkbox left */
  margin-left: 170px;
  box-shadow: 2px 1px 2px 1px #454545;

  input {
    width: 90px;
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

  button,
  input {
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

export const ButtonEdit = styled.div`
  width: flex;
  align-items: center;
  font-size: 12px;
  height: 32px;
  border: solid 2px #666;
  width: 90px;
  margin-right: 10px;

  input {
    width: 180px;
    height: 32px;
    border: 0;

    padding-left: 40px;
    background: url(${EditIcon}) no-repeat 7px center;
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
