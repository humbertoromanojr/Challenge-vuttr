import styled from 'styled-components';

import SearchIcon from '../../assets/images/search.svg';
import ArrowLeftIcon from '../../assets/images/arrow-left.svg';
import ArrowRigthIcon from '../../assets/images/arrow-right.svg';
import DeleteIcon from '../../assets/images/delete.svg';
import HomeIcon from '../../assets/images/home.svg';

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  justify-content: space-between;
  background: #2497b2;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  height: 20px;
  width: 80%;

  input {
    flex: 1;
    font-size: 13px;
    color: #121212;
    border-radius: 10px;
    padding-left: 10px;
  }
`;

export const ButtonSearch = styled.button`
  width: flex;
  align-items: center;
  font-size: 15px;
  margin-left: 20px;
  margin-right: 20px;
  height: 20px;
  width: 90px;
  border: 0;
  border-radius: 10px;
  background: #fff url(${SearchIcon}) no-repeat 7px center;

  small {
    color: #666;
    justify-content: center;
    align-items: center;
    padding-left: 5px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20;
  padding-left: 20px;
`;

export const ArrowLeft = styled.button`
  padding-left: 20px;
  margin-right: 5px;
  height: 20px;
  width: 40px;
  border: 0;
  background: url(${ArrowLeftIcon}) no-repeat 7px center;
`;

export const ArrowRight = styled.button`
  margin-right: 5px;
  height: 20px;
  width: 40px;
  border: 0;
  background: url(${ArrowRigthIcon}) no-repeat 7px center;
`;

export const Delete = styled.button`
  margin-right: 5px;
  height: 20px;
  width: 40px;
  border: 0;
  background: url(${DeleteIcon}) no-repeat 7px center;
`;

export const Home = styled.button`
  margin-right: 5px;
  height: 20px;
  width: 40px;
  border: 0;
  background: url(${HomeIcon}) no-repeat 7px center;
`;
