import { combineReducers } from 'redux';
import categories from './CategoryReducer';
import posts from './PostReducer';
export default combineReducers({
    categories,
	posts
});
