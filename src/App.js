import './App.css';
import {Lorem} from "./components/Lorem/Lorem";
import {Modal} from "./components/Modal/Modal";
import {useState} from "react";

function App() {
    // https://www.youtube.com/watch?v=i2Yf7JZonB4
    const [modalActive, setModalActive] = useState(true);
    return (
        <div>
            <button className='open-button' onClick={() => setModalActive(true)}>Login</button>
            <Lorem/>
            <Lorem/>
            <Lorem/>
            <Modal active={modalActive} setActive={setModalActive}>
                <label>Login: <input type="text" placeholder='Login'/> </label>
                <label>Password: <input type="text" placeholder='Password'/> </label>
                <button>Login</button>
            </Modal>
        </div>
    );
}

export default App;
