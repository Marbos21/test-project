import {GET_ALBUMS} from './actions';

const initialState = {
  albums: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      return {...state, albums: action.payload};
    default:
      return state;
  }
}

export default userReducer;
