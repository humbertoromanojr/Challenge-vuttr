import styled from 'styled-components';

import DeleteIcon from '../../assets/images/delete.svg';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    align-content: center;
    width: 500px;
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
  border-width: 1;
  border-color: solid 1px #454545;
  border-radius: 7;
  background-color: #ddd;
`;

export const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Delete = styled.button`
  margin-right: 5px;
  height: 20px;
  width: 40px;
  border: 0;
  padding-left: 30px;
  margin-right: 50px;
  background: url(${DeleteIcon}) no-repeat 7px center;
`;
