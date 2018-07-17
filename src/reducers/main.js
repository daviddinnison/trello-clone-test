import { TEST } from '../actions/main';

const initialState = {
  boards: [
    {
      title: 'board 1',
      lists: [{ title: 'list 1', cards: [{ title: 'card 1' }] }]
    },
    {
      title: 'board 2',
      lists: [{ title: 'list 2', cards: [{ title: 'card 2' }] }]
    }
  ],
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
