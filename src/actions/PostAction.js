import {
    getCategories,
	getDonateRequestPosts,
	getDonateRequestPostsByCategory
} from '../api';


export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const SELECT_CATEGORY ='SELECT_CATEGORY';


export const fetchCategories = (category)  => dispatch => (
 getCategories().then(categories => dispatch({
            type: LOAD_CATEGORIES,
            categories,
            category
        }))

)

export const fetchDonateRequestPosts = ()  => dispatch => (
 getDonateRequestPosts().then(posts => dispatch({
            type: LOAD_POSTS,
            posts
        }))

)


export const fetchDonateRequestPostsByCategory = (category)  => dispatch => (
 getDonateRequestPostsByCategory(category).then(posts => dispatch({
            type: SELECT_CATEGORY,
            posts,
			category
        }))

)