import './App.css';
import {ReadMoreReadLess} from "./components/ReadMoreReadLess/ReadMoreReadLess";

function App() {
    return (
        <div >
            <ReadMoreReadLess limit={200}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, corporis, culpa cum dolore doloribus
                dolorum est facilis harum hic inventore ipsa ipsam iure laudantium magni maiores minima minus natus
                necessitatibus nostrum pariatur possimus quaerat quasi quisquam quos similique tenetur vitae? Accusamus
                deserunt maiores modi officiis? A accusamus adipisci asperiores, aspernatur at atque commodi cum debitis
                ducimus enim esse excepturi expedita facere facilis illum incidunt iure laborum libero magnam minus
                mollitia, nesciunt nobis non numquam officiis omnis possimus provident quidem quod recusandae,
                reiciendis repudiandae rerum saepe sit totam ut voluptate! Deserunt eligendi eos, natus nobis numquam
                quia quis recusandae voluptate voluptatum.
            </ReadMoreReadLess>
            <ReadMoreReadLess limit={100}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, corporis, culpa cum dolore doloribus
            dolorum est facilis harum hic inventore ipsa ipsam iure laudantium magni maiores minima minus natus
            necessitatibus nostrum pariatur possimus quaerat quasi quisquam quos similique tenetur vitae? Accusamus
            deserunt maiores modi officiis? A accusamus adipisci asperiores, aspernatur at atque commodi cum debitis
            ducimus enim esse excepturi expedita facere facilis illum incidunt iure laborum libero magnam minus
            mollitia, nesciunt nobis non numquam officiis omnis possimus provident quidem quod recusandae,
            reiciendis repudiandae rerum saepe sit totam ut voluptate! Deserunt eligendi eos, natus nobis numquam
            quia quis recusandae voluptate voluptatum.
        </ReadMoreReadLess>
        </div>
    );
}

export default App;
