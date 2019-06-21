import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/Header';
import './styles/global';
import { Container } from './styles/components';

const App = () => (
  <Provider store={store}>
    <Container>
      <Header />
    </Container>
  </Provider>
);

export default App;
