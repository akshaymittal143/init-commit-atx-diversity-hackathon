import { combineReducers } from 'redux';
import PostsReducer from './reducerPosters';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
