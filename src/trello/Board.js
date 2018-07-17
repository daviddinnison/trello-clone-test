import React from 'react';
import { connect } from 'react-redux';

class Board extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boards: state.boards
  };
};

export default connect(mapStateToProps)(Board);
