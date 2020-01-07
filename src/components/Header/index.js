import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Search,
  Menu,
  ButtonSearch,
  ArrowRight,
  ArrowLeft,
  Delete,
  Home,
  Form,
} from './styles';

import {
  getToolsRequest,
} from '../../store/modules/tools/actions';

function Header() {
  const tools = useSelector(state => state.tools.data);

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getToolsRequest(search));
  }, [dispatch, search]);

  return (
    <Container>
      <Menu>
        <ArrowLeft />
        <ArrowRight />
        <Delete />
        <Home />
      </Menu>

      <Form>
        <Search>
          <input type="text" placeholder="https://" name="search" onChange={e => setSearch(e.target.value)} />
        </Search>

        <ButtonSearch>
          <button onClick={e => setSearch(e.target.value)}>Search</button>
        </ButtonSearch>
      </Form>
    </Container>
  );

}

export default Header;
