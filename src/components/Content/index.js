import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Modal from 'react-awesome-modal';
import api from '../../services/api';
import * as actions from '../../store/actions';

import FormModalAdd from '../FormModalAdd';

import {
  Container,
  ToolsListItem,
  Delete,
  AlignHorizontal,
  AlignHorizontalRight,
  Description,
  Tags,
  Form,
  ButtonAddHome,
  ButtonEdit,
  InputSearch,
  FormModal,
  CheckBox,
  ContainerModalDelete,
  HeaderModalDelete,
  ContainerButtonTop,
} from './styles';

import DeleteIcon from '../../assets/images/delete2.svg';
import EditIcon from '../../assets/images/share.svg';

class Content extends Component {
  static propTypes = {
    tools: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          description: PropTypes.string,
          tags: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      tools: [],
      isEdit: false,
      visible: false,
      showModal: false,
      title: this.props.title,
      link: this.props.link,
      description: this.props.description,
      tags: this.props.tags,
    };
  }

  componentDidMount() {
    api.get('/tools').then((res) => {
      console.log(res);
      this.setState({
        ...this.state,
        tools: res.data,
        isEdit: false,
        visible: false,
        showModal: false,
        title: this.props.title,
        link: this.props.link,
        description: this.props.description,
        tags: this.props.tags,
      });
    });
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
      showDelete: false,
    });
  }

  openModal2() {
    this.setState({
      showDelete: true,
    });
  }

  openModal3() {
    this.setState({
      showModal: true,
      isEdit: true,
    });
  }

  removeTool = (id) => {
    this.props.removeTool(this.props.id);

    api
      .delete(`/tools/${id}`, {
        id: this.state.id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    const { state } = this;

    state[event.target.name] = event.target.value;

    this.setState({
      state,
    });
  };

  updateTool = (id) => {
    console.tron.log('edit !!!');
    this.setState({ isEdit: true });

    const modifyTool = {
      id: this.props.id,
      title: this.state.title,
      link: this.state.link,
      description: this.state.description,
      tags: this.state.tags,
    };

    api
      .put(`/tools/${id}`, modifyTool)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { tools } = this.state;
    const toolList = tools.length ? (
      tools.map(tool => (
        <div>
          <ToolsListItem key={tool.id}>
            <AlignHorizontal>
              <span>{tool.title}</span>
              <ContainerButtonTop>
                <div>
                  <img src={EditIcon} width="10" height="10" alt="Icon delete" />
                  <input type="button" value="Edir" onClick={() => this.openModal3()} />
                </div>
                <div>
                  <img src={DeleteIcon} width="10" height="10" alt="Icon delete" />
                  <input type="button" value="Remove" onClick={() => this.openModal2()} />
                </div>
              </ContainerButtonTop>
            </AlignHorizontal>
            <Description>{tool.description}</Description>
            <span>{tool.link}</span>
            <Tags>#{tool.tags}</Tags>
          </ToolsListItem>

          {/* Form Modal Delete */}
          <section>
            <Modal
              visible={this.state.showDelete}
              width="400"
              height="120"
              effect="fadeInDown"
              onClickAway={() => this.closeModal()}
            >
              <ContainerModalDelete>
                <form onSubmit={this.removeTool}>
                  <HeaderModalDelete>
                    <div>
                      <img src={DeleteIcon} width="10" height="10" alt="Icon delete" />
                      <small> Remove tool</small>
                    </div>
                    <p>Você deseja deletar o registro {tool.title} ?</p>
                  </HeaderModalDelete>
                  <AlignHorizontalRight>
                    <button>Cancel</button>
                    <Delete>
                      <input
                        type="button"
                        value="Yes, remove"
                        type="submit"
                        onClick={() => this.removeTool(tool.id)}
                      />
                    </Delete>
                  </AlignHorizontalRight>
                </form>
              </ContainerModalDelete>
            </Modal>
          </section>

          {/* form Modal Add */}
          <section>
            <Modal
              visible={this.state.visible}
              width="400"
              height="400"
              effect="fadeInUp"
              onClickAway={() => this.closeModal()}
            >
              <div>
                <FormModalAdd />
              </div>
            </Modal>
          </section>

          {/* form Modal Update */}
          <section>
            <Modal
              visible={this.state.showModal}
              width="400"
              height="370"
              effect="fadeInUp"
              onClickAway={() => this.closeModal()}
            >
              <FormModal>
                <form onSubmit={this.updateTool}>
                  <div>
                    <span>Update tool</span>

                    <label>Tool Name</label>
                    <input
                      type="text"
                      onChange={this.handleChange}
                      value={tool.title}
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
                  <AlignHorizontalRight>
                    <button>Cancel</button>
                    <div>
                      <input
                        type="button"
                        value="EDIT"
                        type="submit"
                        onClick={() => this.updateTool(tool.id)}
                      />
                    </div>
                  </AlignHorizontalRight>
                </form>
              </FormModal>
            </Modal>
          </section>
        </div>
      ))
    ) : (
      <div>Find no tools</div>
    );

    return (
      <Container>
        <header>
          <h1>VUTTR</h1>
          <h3>Very Useful Tools to Remember</h3>
        </header>
        <Form>
          <InputSearch>
            <input type="text" size="10" placeholder="search" />
          </InputSearch>
          <CheckBox>
            <input type="checkbox" value="tags" name="tags" /> <small>search in tags only</small>
          </CheckBox>
          <ButtonAddHome>
            <input type="button" value="Add" onClick={() => this.openModal()} />
          </ButtonAddHome>
        </Form>
        {toolList}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeTool: (id) => {
    dispatch(actions.removeTool(id));
  },
  updateTool: (id, title, link, description, tags) => {
    dispatch(actions.updateTool(id, title, link, description, tags));
  },
});
export default connect(
  null,
  mapDispatchToProps,
)(Content);
