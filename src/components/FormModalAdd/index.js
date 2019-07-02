import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import api from '../../services/api';

import {
  Container, HeaderModal, FormModal, ButtonAdd,
} from './styles';

class HeaderModalAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tools: [],
    };
  }

  handleChange = (event) => {
    const { state } = this;

    state[event.target.name] = event.target.value;

    this.setState({
      state,
    });
  };

  handleSubmit = () => {
    // desabileta comportamento padrao dos navegadores
    // event.preventDefault();

    this.props.addTool(this.state.title, this.state.link, this.state.description, this.state.tags);

    api
      .post('/tools', {
        title: this.state.title,
        link: this.state.link,
        description: this.state.description,
        tags: this.state.tags,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Container>
        <HeaderModal>Add new tool</HeaderModal>
        <FormModal>
          <form onSubmit={this.handleSubmit}>
            <label>Tool Name</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="Add Title"
              name="title"
              required
            />

            <label>Tool Link</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.link}
              placeholder="Add link"
              name="link"
              required
            />

            <label>Tool description</label>
            <textarea
              cols={20}
              rows={5}
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
              placeholder="Add message"
            />
            <label>Tags</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.tags}
              placeholder="Add Tags"
              name="tags"
              required
            />

            <ButtonAdd>
              <input type="submit" value="Add tool" />
            </ButtonAdd>
          </form>
        </FormModal>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTool: (title, link, description, tags) => {
    dispatch(actions.addTool(title, link, description, tags));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(HeaderModalAdd);
