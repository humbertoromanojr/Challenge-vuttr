import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../services/api';

import * as actions from '../../store/actions';

import { Container, FormModal } from './styles';

class FormModelEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      link: this.props.link,
      description: this.props.description,
      tags: this.props.tags,
    };
  }

  closeModal() {
    this.setState({
      visibleEdit: false,
    });
  }

  componentDidMount() {
    api
      .get(`/tools/${this.props.id}`)

      .then((res) => {
        console.log(res);
        this.setState({
          ...res.tools,
        });
      });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Container>
        <section>
          <FormModal>
            <form onSubmit={this.updateTool}>
              <div>
                <span>Update tool</span>

                <label>Tool Name</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.title}
                  name="title"
                />
                <label>Tool Link</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.link}
                  name="link"
                />

                <label>Tool description</label>
                <textarea
                  cols={20}
                  rows={5}
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                />
                <label>Tags</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.tags}
                  name="tags"
                />
              </div>
            </form>
          </FormModal>
        </section>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateTool: (id, title, link, description, tags) => {
    dispatch(actions.updateTool(id, title, link, description, tags));
  },
});
export default connect(
  null,
  mapDispatchToProps,
)(FormModelEdit);
