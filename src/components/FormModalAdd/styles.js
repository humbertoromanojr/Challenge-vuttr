import styled from 'styled-components';

import AddIcon from '../../assets/images/plus.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
`;

export const HeaderModal = styled.header`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 30px;
  margin-bottom: 10px;

  background: url(${AddIcon}) no-repeat 7px center;
`;

export const FormModal = styled.div`
  display: flex;
  flex: 1;
  align-items: left;
  padding: 10px;

  form {
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
    padding-top: 10px;
  }

  button {
    align-items: right;
  }
`;

export const ButtonAdd = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-content: right;
  align-items: right;
  text-align: right;
  margin-top: 20px;

  input {
    border: 0;
    width: 70px;
    box-shadow: 2px 1px 2px 1px #454545;
    background-color: #fff;
  }
`;
