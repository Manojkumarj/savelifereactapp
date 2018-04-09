import {
    LOAD_POSTS,   
    SELECT_CATEGORY,   
    DELETE_POST
 } from '../actions';

function posts (state = initialPostsState, action) {
	debugger;
    switch (action.type) {
        case LOAD_POSTS:
            const { posts } = action;
            return {
                sortBy: SORT_BY_LATEST,
                posts: sortPostsBy(posts, SORT_BY_LATEST)
            };      
        case SELECT_CATEGORY:
            return {
                sortBy: SORT_BY_LATEST,
                posts: sortPostsBy(action.posts, SORT_BY_LATEST)
            };
        default:
            return state;
    }
}

const sortPostsBy = (posts, option) => {
    switch (option) {
        case SORT_BY_UP:
            return [...posts].sort((a, b) => {
                return b.voteScore - a.voteScore;
            });
        case SORT_BY_DOWN:
            return [...posts].sort((a, b) => {
                return a.voteScore - b.voteScore;
            });
        case SORT_BY_LATEST:
            return [...posts].sort((a, b) => {
                return b.timestamp - a.timestamp;
            });
        default:
            return posts;
    }
}

const SORT_BY_UP = 'upVotes';
const SORT_BY_DOWN = 'downVotes';
const SORT_BY_LATEST = 'latest';

const initialPostsState = {
    sortBy: SORT_BY_LATEST,
    posts: []
}

export default posts;
