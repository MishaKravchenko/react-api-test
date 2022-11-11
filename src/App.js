import './styles/App.css';
import {PostList} from "./components/PostList/PostList";
import {useEffect, useMemo, useRef, useState} from "react";
import {PostForm} from "./components/PostForm/PostForm";
import {MySelect} from "./components/UI/select/MySelect";
import {MyInput} from "./components/UI/input/MyInput";
import {PostFilter} from "./components/PostFilter/PostFilter";
import {MyModal} from "./components/UI/modal/MyModal";
import {MyButton} from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import {postService} from "./services/PostService";
import {Loader} from "./components/UI/loader/Loader";
import {getPageCount, getPagesArray} from "./utils/pages";
import {Pagination} from "./components/UI/pagination/Pagination";

function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    const [isLoadingPost, setIsLoadingPost] = useState(false);

    useEffect(() => {
        fetchPosts()
    }, [page])

    const fetchPosts = async () => {
        setIsLoadingPost(true);
        setTimeout(async () => {
            const response = await postService.getAll(limit, page)
            setPosts(response.data)
            const totalCount = (response.headers['x-total-count'])
            setTotalPages(getPageCount(totalCount, limit))
            setIsLoadingPost(false);
        }, 1000)
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className='App'>
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Створити пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {isLoadingPost
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
                : <PostList posts={sortedAndSearchPosts} removePost={removePost}/>
            }
            <Pagination page={page} totalPages={totalPages} changePage={changePage}/>
        </div>
    );
}

export default App;
