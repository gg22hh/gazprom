import { useState } from "react";
import "./App.css";
import { AddForm } from "./components/AddForm/AddForm";
import { Map } from "./components/Map/Map";

function App() {
    const [places, setPlaces] = useState([]);
    return (
        <div className="App">
            <div className="content">
                <Map places={places} setPlaces={setPlaces} />
                <div className="content__info">
                    <AddForm places={places} setPlaces={setPlaces} />
                </div>
            </div>
        </div>
    );
}

export default App;
