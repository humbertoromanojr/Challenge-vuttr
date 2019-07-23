import React from 'react';

import api from '../../services/api';

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

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  searching = () => {
    api.get('/tools?q=').then((res) => {
      this.setState({
        tools: res.data,
      });
    });
  }

  render() {
    return (
      <Container>
        <Menu>
          <ArrowLeft />
          <ArrowRight />
          <Delete />
          <Home />
        </Menu>

        <Form method="get">
          <Search>
            <input type="text" name="q" placeholder="https://" />
          </Search>

          <ButtonSearch>
            <button onClick={() => this.searching()}>Search</button>
          </ButtonSearch>
        </Form>
      </Container>
    );
  }
}

export default Header;
