import React, { Component } from 'react';

import API from 'apisauce';

import { Container } from './styles';

const baseURL = 'https://gitlab.com/bossabox/challenge-fake-api/tree/master';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  render() {
    return (
      <Container>
        <div>
          <p>teste</p>
        </div>
      </Container>
    );
  }
}

export default Content;
