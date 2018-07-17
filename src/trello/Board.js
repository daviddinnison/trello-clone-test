import React, { Component } from 'react';
import { Button } from 'antd';
import './styles/Board.css';

// import PropTypes from 'prop-types';

export default class Board extends Component {
  /*
  create a delete board function. when you click it asks you to confirm
  */

  //   static propTypes = {
  //     black: PropTypes.bool
  //   };

  render() {
    // const { black } = this.props;
    // const fill = black ? 'black' : 'white';

    return (
      <div className="board">
        <Button type="danger" icon="close" />
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}
