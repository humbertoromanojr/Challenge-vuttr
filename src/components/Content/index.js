import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as ToolsListActions } from '../../store/ducks/toolsList';

import {
  Container, ToolsListItem, Delete, HeaderItem,
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

        {this.props.toolsList.data.map(tools => (
          <ToolsListItem key={tools.id}>
            <HeaderItem>
              {tools.title}
              <Delete>Remover</Delete>
            </HeaderItem>
            {tools.description}#{tools.tags}
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
