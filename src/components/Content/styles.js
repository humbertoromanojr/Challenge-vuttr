import styled from 'styled-components';

import DeleteIcon from '../../assets/images/delete.svg';
import AddIcon from '../../assets/images/plus.svg';
import InputSearchIcon from '../../assets/images/search.svg';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex: 1;
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

export const ButtonAdd = styled.button`
  width: flex;
  align-items: center;
  font-size: 13px;
  height: 22px;
  width: 70px;
  border: 2;
  background: #fff url(${AddIcon}) no-repeat 7px center;

  small {
    color: #666;
    justify-content: center;
    align-items: center;
    padding-left: 5px;
  }
`;

export const ToolsListItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-content: center;
  flex-direction: column;
  padding: 10px;
  height: 100px;
  width: 500px;
  border: solid 1px #454545;
  background-color: #fff;

  margin-bottom: 20px;
`;

export const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Delete = styled.div`
  margin-right: 5px;
  height: 20px;
  width: 40px;
  font-size: 14px;
  margin-top: 3px;
  padding-left: 30px;
  margin-right: 20px;
  background: url(${DeleteIcon}) no-repeat 7px center;
`;

export const Description = styled.div`
  display: flex;
  flex: 1;
  font-size: 16;
  color: #666;
  margin-top: 20px;
`;

export const Tags = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
  font-size: 18;
  font-weight: bold;
  color: #222;
`;
