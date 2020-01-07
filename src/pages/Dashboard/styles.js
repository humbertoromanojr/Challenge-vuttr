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
    width: 750px;
    margin-top: 50px;
  }
`;

export const ToolsListItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-content: center;
  flex-direction: column;
  padding: 15px 20px;
  height: 190px;
  width: 750px;
  border: 2px solid #666;
  box-shadow: 0px 0px 0px 0px #454545;
  background-color: #fff;
  transition: all ease 0.25s;

  margin-bottom: 20px;

  &:hover {
    box-shadow: 2px 1px 2px 1px #565656;
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
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;

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

  span {
    color: #f0f;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 750px;
  margin-bottom: 20px;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: row;

    &:first-child {
      margin-right: 10px;
    }
  }
`;

export const HeaderFormButtons = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;

  p {
    padding-left: 5px;
  }

  a {
    padding-left: 5px;
    text-decoration: none;
    font-size: 16px;
    color: #222;
  }

  img {
    width: 12px;
    height: 12px;
    margin-right: 10px;
  }

  input {
    font-size: 16px;
  }
`;


export const HeaderModal = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;

  img {
    width: 12px;
    height: 12px;
    margin-right: 10px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

`;

export const ButtonAddHome = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 32px;
  border: solid 1px #333;
  width: 100px;
  box-shadow: 3px 3px 1px 1px #333;

  input {
    width: 100px;
    height: 32px;
    border: 0;
    font-size: 16px;

    background: #fff url(${AddIcon}) no-repeat 7px center;
  }
`;

export const InputSearch = styled.div`
  display: flex;
  align-items: left;
  font-size: 15px;
  height: 36px;
  width: 250px;
  margin-top: 5px;
  border: solid 2px #666;
  padding: 5px 7px 5px 26px;
  background: #fff url(${InputSearchIcon}) no-repeat 7px center;

  input {
    flex: 1;
    font-size: 16px;
    color: #121212;
    padding: 0 0 0 5px;
    border: 0;
    width: 240px;
    background: transparent;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;

  small {
    padding: 2px;
    margin-left: 5px;
    font-size: 12px;
  }
`;

export const Close = styled.a`
  font-size: 12px;
  background: url(${CloseIcon}) no-repeat 7px center;

  a {
    font-size: 14px;
    text-decoration: none;
    padding-left: 50px;
    color: #222;
  }
`;
