
const api = "https://murmuring-hamlet-65930.herokuapp.com"
let token = localStorage.token

if (!token)

    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(
		
		data => data.categories)

export const getDonateRequestPosts = () =>
    fetch(`${api}/posts`, { headers })
           .then(res => res.json())
        .then(posts => posts.filter(post => !post.deleted))

export const getDonateRequestPostsByCategory= (category) =>
    fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())