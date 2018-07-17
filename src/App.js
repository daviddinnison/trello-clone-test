import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <p>hello</p>
      </Provider>
    );
  }
}

export default App;
