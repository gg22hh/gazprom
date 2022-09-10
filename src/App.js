import { useEffect, useState } from "react";
import "./App.css";
import { AddForm } from "./components/AddForm/AddForm";
import { Map } from "./components/Map/Map";
import { Places } from "./components/Places/Places";

function App() {
   const [places, setPlaces] = useState([]);
   const [search, setSearch] = useState("");
   const [showOnMap, setShowOnMap] = useState([]);
   useEffect(() => {
      const getPlaces = async () => {
         fetch(`https://gaz-back.herokuapp.com/buildings`)
            .then((res) => res.json())
            .then((arr) => {
               setShowOnMap(arr);
               setPlaces(arr);
            });
      };
      getPlaces();
   }, [setPlaces]);

   return (
      <div className="App">
         <div className="content">
            <Map places={showOnMap} />
            <div className="content__info">
               <div className="content__info-top">
                  <div>
                     Всего <span className="overall">{places.length}</span>
                  </div>
                  <AddForm places={places} setPlaces={setPlaces} />
               </div>
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
