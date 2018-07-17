import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Container from './trello/Container';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
