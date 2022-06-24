import { useEffect, useState } from "react";
import "./App.css";
import { AddForm } from "./components/AddForm/AddForm";
import { Map } from "./components/Map/Map";
import { Places } from "./components/Places/Places";

function App() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        const getPlaces = async () => {
            fetch(`https://62b48976da3017eabb0cb5ed.mockapi.io/places`)
                .then((res) => res.json())
                .then((arr) => setPlaces(arr));
        };
        getPlaces();
    }, [setPlaces]);
    return (
        <div className="App">
            <div className="content">
                <Map places={places} />
                <div className="content__info">
                    <AddForm places={places} setPlaces={setPlaces} />
                    <Places places={places} setPlaces={setPlaces} />
                </div>
            </div>
        </div>
    );
}

export default App;
