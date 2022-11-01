import './App.css';
import {Route, Routes} from "react-router-dom";
import {BaseLayout} from "./layouts/BaseLayout";
import {AlbumsPage, HomePage, NotFoundPage, PhotosPage} from "./pages";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<BaseLayout/>}>
                    <Route path={'home'}  element={<HomePage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'photos'} element={<PhotosPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
