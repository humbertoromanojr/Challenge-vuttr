import React, { Component } from 'react';

import { Container } from './styles';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  _handleGet() {
    ApiCall.get('/tools').then((response) => {
      this.setState({
        data: response.data.id,
      });
    });
    /* .catch(error => {
      console.log(error)
    }) */
  }

  _handlePost() {}

  render() {
    return (
      <Container>
        <div>{this.state.data ? this.state.data : null}</div>
        <div>
          <button onClick={this._handleGet}>Get</button>
          <button>Post</button>
        </div>
      </Container>
    );
  }
}

export default Content;
