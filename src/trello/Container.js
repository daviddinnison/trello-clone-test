import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class Container extends React.Component {
  render() {
    return (
      <div>
        <p>where the boards will be</p>
        <Button type="primary" icon="search">
          Search
        </Button>
      </div>
    );
  }
}

export default Container;
