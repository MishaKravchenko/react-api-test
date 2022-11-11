import axios from "axios";

export const postService = {
    getAll: (limit = 10, page = 1) => axios.get('https://jsonplaceholder.typicode.com/posts',{
        params:{
            _limit: limit,
            _page: page
        }
    }).then(value => value)
}