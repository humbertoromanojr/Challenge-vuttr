import React from 'react';

import {
  Container,
  Search,
  Menu,
  ButtonSearch,
  ArrowRight,
  ArrowLeft,
  Delete,
  Home,
} from './styles';

console.tron.log('teste !!');

const Header = () => (
  <Container>
    <Menu>
      <ArrowLeft />
      <ArrowRight />
      <Delete />
      <Home />
    </Menu>

    <Search>
      <input placeholder="https://" />
    </Search>

    <ButtonSearch>
      <small>Search</small>
    </ButtonSearch>
  </Container>
);

export default Header;
