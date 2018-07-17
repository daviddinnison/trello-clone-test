import { TEST } from '../actions/main';

const initialState = {
  boards: [{ value: 'board 1' }],
  test: 'hello this is a test'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TEST: {
      return Object.assign({}, state, {
        test: 'test passed'
      });
    }
    default:
      return state;
  }
}
