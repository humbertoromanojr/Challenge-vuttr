import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Modal from 'react-awesome-modal';
import api from '../../services/api';
import * as actions from '../../store/actions';

import FormModalAdd from '../FormModalAdd';
import FormModalEdit from '../FormModalEdit';

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
  InputSearch,
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
      ...this.state,
      tools: [],
      isEdit: false,
      modalAdd: false,
      modalDelete: false,
      modalUpdate: false,
      title: this.props.title,
      link: this.props.link,
      description: this.props.description,
      tags: this.props.tags,
    };
  }

  componentDidMount() {
    api.get('/tools').then((res) => {
      this.setState({
        tools: res.data,
      });
    });
  }

  openModal() {
    this.setState({
      modalAdd: true,
    });
  }

  openModal2() {
    this.setState({
      modalDelete: true,
    });
  }

  openModal3() {
    this.setState({
      modalUpdate: true,
      isEdit: true,
    });
  }

  closeModal() {
    this.setState({
      modalAdd: false,
      modalDelete: false,
      modalUpdate: false,
    });
  }

  removeTool = (event, id) => {
    event.preventDefault();

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

  updateTool = (id) => {
    // event.preventDefault();

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
        console.log(res.tools);
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
          <Modal
            visible={this.state.modalDelete}
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
                  <p>Você deseja deletar o registro ?</p>
                </HeaderModalDelete>
                <AlignHorizontalRight>
                  <button type="submit" onClick={() => this.closeModal()}>Cancel</button>
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
          {/* form Modal Add */}
          <Modal
            visible={this.state.modalAdd}
            width="400"
            height="400"
            effect="fadeInLeft"
            onClickAway={() => this.closeModal()}
          >
            <div>
              <FormModalAdd />
            </div>
          </Modal>
          {/* form Modal Edit */}
          <Modal
            visible={this.state.modalUpdate}
            width="400"
            height="400"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <div>
              <FormModalEdit />
            </div>
            <AlignHorizontalRight>
              <button type="submit" onClick={() => this.closeModal()}>
                  Cancel
              </button>
              <div>
                <input
                  type="button"
                  value="Yes, Edite"
                  type="submit"
                  onClick={() => this.updateTool(tool.id)}
                />
              </div>
            </AlignHorizontalRight>
          </Modal>
        </div>
      ))
    ) : (
      <div>Find tools</div>
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
