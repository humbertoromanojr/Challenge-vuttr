import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
// import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';

import './config/reactotron';

import Routes from './routes';
import history from './services/history';

import { store } from './store';

import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';

import GlobalStyle from './styles/global';
import { Wrapper, Container } from './styles/components';

const App = () => (
  <Provider store={store}>
    <Wrapper>
      <Router history={history}>
        <Header />
          <Container>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
         </Container>
      </Router>
    </Wrapper>
  </Provider>
);

export default App;
