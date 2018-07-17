import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import 'antd/dist/antd.css';

import Board from './Board';

class Container extends React.Component {
  addBoard() {}
  renderBoards() {
    if (this.props.boards.length) {
      const boardData = this.props.boards.map((item, index) => <Board key={index} title={item.title} />);
      return boardData;
    } else {
      return <p>please add a board to get started.</p>;
    }
  }

  render() {
    return (
      <div>
        <h1>Trello Clone</h1>
        {this.renderBoards()}
        <Button type="primary" icon="plus" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boards: state.boards
  };
};

export default connect(mapStateToProps)(Container);
