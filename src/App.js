import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './config/reactotron';

import store from './store';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import './styles/global';
import { Wrapper, Container } from './styles/components';

const App = () => (
  <Provider store={store}>
    <Wrapper>
      <Header />
      <Container>
        <Content />
        <Router exact path="/" component={Content} />
      </Container>
      <Footer />
    </Wrapper>
  </Provider>
);

export default App;
