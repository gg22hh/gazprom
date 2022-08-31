import { useEffect, useState } from "react";
import "./App.css";
import { AddForm } from "./components/AddForm/AddForm";
import { Map } from "./components/Map/Map";
import { Places } from "./components/Places/Places";

function App() {
   const [places, setPlaces] = useState([]);
   const [search, setSearch] = useState("");
   const [showOnMap, setShowOnMap] = useState("");
   useEffect(() => {
      const getPlaces = async () => {
         fetch(
            `https://6303a6270de3cd918b3b3fda.mockapi.io/gggg?search=${showOnMap}`
         )
            .then((res) => res.json())
            .then((arr) => setPlaces(arr));
      };
      getPlaces();
   }, [setPlaces, showOnMap]);
   return (
      <div className="App">
         <div className="content">
            <Map places={places} />
            <div className="content__info">
               <AddForm places={places} setPlaces={setPlaces} />
               <Places
                  search={search}
                  setSearch={setSearch}
                  places={places}
                  setPlaces={setPlaces}
                  setShowOnMap={setShowOnMap}
               />
            </div>
         </div>
      </div>
   );
}

export default App;
