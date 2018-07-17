export const TEST = 'TEST';
export const test = () => ({
  type: TEST
});

export const GET_BOARDS_REQUEST = 'GET_BOARDS_REQUEST';
export const getBoardsRequest = () => {
  type: GET_BOARDS_REQUEST
}

export const GET_BOARDS_SUCCESS = 'GET_BOARDS_SUCCESS';
export const getBoardsSuccess = (id) => {
  type: GET_BOARDS_SUCCESS,
  id
}

export const GET_BOARDS_ERROR = 'GET_BOARDS_ERROR';
export const getBoardsError = (error) => {
  type: GET_BOARDS_ERROR,
  error
}


export const DELETE_BOARD_REQUEST = 'DELETE_BOARD_REQUEST';
export const deleteBoardRequest = () => {
  type: DELETE_BOARD_REQUEST
}

export const DELETE_BOARD_SUCCESS = 'DELETE_BOARD_SUCCESS';
export const deleteBoardSuccess = (id) => {
  type: DELETE_BOARD_SUCCESS,
  id
}

export const DELETE_BOARD_ERROR = 'DELETE_BOARD_ERROR';
export const deleteBoardError = (error) => {
  type: DELETE_BOARD_ERROR,
  error
}

// export const deleteBoard = id => dispatch => {
//   dispatch(getSimilarArtistRequest());
//   fetch(
//     `${API_BASE_URL}?method=artist.getsimilar&artist=${formattedInput}&api_key=${API_KEY}&format=json`,
//     {}
//   )
//     .then(res => {
//       if (!res.ok) {
//         console.log('bad response');
//         throw new Error(res.statusText);
//       }
//       return res.json();
//     })
//     .then(data => {
//       if (data.message) {
//         dispatch(getSimilarArtistError(data.message));
//       } else {
//         const formattedArtist = data.similarartists['@attr'].artist;

//         dispatch(saveOriginalArtist(formattedArtist));
//       }
//     })

//     .catch(err => {
//       console.log('ended up in a error catch', err);
//       dispatch(get(err));
//     });
// };