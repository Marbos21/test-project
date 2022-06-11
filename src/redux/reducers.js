import {GET_CITIES} from './actions';

const initialState = {
  name: '',
  age: 0,
  cities: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return {...state, cities: action.payload};
    default:
      return state;
  }
}

export default userReducer;
