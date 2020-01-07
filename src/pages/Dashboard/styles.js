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
  background: #dedce1;

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
  padding: 20px;
  height: 150px;
  width: 620px;
  box-shadow: 2px 1px 2px 1px #454545;
  background-color: #fff;
  transition: all ease 0.25s;

  margin-bottom: 20px;

  &:hover {
    box-shadow: 4px 2px 4px 2px #565656;
    transition: all ease 0.15s;
  }

  p {
    font-size: 16;
    color: #666;
    padding-bottom: 10px;
    text-align: justify;
  }

  label {
    margin-top: 20px;
    font-size: 18;
    font-weight: bold;
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

export const HeaderForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 620px;
  margin-bottom: 15px;
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

export const CheckBox = styled.div`
  display: flex;
  align-items: left;

  small {
    margin-top: 2px;
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
