import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>VUTTR</h1>
    </div>
  </Provider>
);

export default App;
