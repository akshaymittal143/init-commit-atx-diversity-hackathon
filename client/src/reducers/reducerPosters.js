import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, state: action.payload.data };
    default:
      return state;
  }
}
