import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as ToolsListActions } from '../../store/ducks/toolsList';

import {
  Container,
  ToolsListItem,
  Delete,
  HeaderItem,
  Description,
  Tags,
  Form,
  ButtonAdd,
  InputSearch,
  CheckBox,
} from './styles';

class Content extends Component {
  static propTypes = {
    getToolsListRequest: PropTypes.func.isRequired,
    toolsList: PropTypes.shape({
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

  componentDidMount() {
    this.props.getToolsListRequest();
  }

  render() {
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
          <ButtonAdd>
            <small>Add</small>
          </ButtonAdd>
        </Form>

        {this.props.toolsList.data.map(tools => (
          <ToolsListItem key={tools.id}>
            <HeaderItem>
              {tools.title}
              <Delete>
                <small>Remover</small>
              </Delete>
            </HeaderItem>
            <Description>{tools.description}</Description>
            <Tags>#{tools.tags}</Tags>
          </ToolsListItem>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  toolsList: state.toolsList,
});

const mapDispatchToProps = dispatch => bindActionCreators(ToolsListActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content);
