import React, { useEffect, useState } from "react";
import { EditForm } from "../EditForm/EditForm";
import { Place } from "./components/Place/Place";
import s from "./Places.module.css";

export const Places = ({
    places,
    setPlaces,
    search,
    setSearch,
    setShowOnMap,
}) => {
    const [show, setShow] = useState(false);
    const [filtredPlaces, setFiltredPlaces] = useState(places);
    const [changedName, setChangedName] = useState("");
    const [changedX, setChangedX] = useState("");
    const [changedY, setChangedY] = useState("");
    const [position, setPosition] = useState();
    const [info, setInfo] = useState({});
    const [building, setBuilding] = useState({});
    const [kvartirs, setKvartirs] = useState({});
    const deletePlace = async (id) => {
        const areYouSure = window.confirm("Are you sure?");
        if (areYouSure) {
            const response = await fetch(
                "https://62b48976da3017eabb0cb5ed.mockapi.io/places/" + id,
                {
                    method: "DELETE",
                }
            );

            if (response.ok) {
                setPlaces(places.filter((place) => place.id !== id));
            } else {
                console.log(`${response.status} - ${response.statusText}`);
            }
        }
    };

    const changePlace = (place, i) => {
        setChangedName(place.name);
        setChangedX(place.place[0]);
        setChangedY(place.place[1]);
        setInfo(place.info);
        setBuilding(place.building);
        setKvartirs(place.kvartir);
        setPosition(i);
    };

    const showAllPlaces = () => {
        setShowOnMap("");
        setSearch("");
    };

    useEffect(() => {
        setFiltredPlaces(
            places?.filter((place) =>
                place.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [places, search]);
    const placesList = filtredPlaces?.map((place, i) => {
        return (
            <Place
                key={place.id}
                deletePlace={() => deletePlace(place.id)}
                {...place}
                index={i}
                setShow={setShow}
                changePlace={() => changePlace(place, i)}
            />
        );
    });
    return (
        <>
            <div className={s.search}>
                <input
                    className={s.input}
                    placeholder="Поиск"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    className={s.button}
                    onClick={() => setShowOnMap(search)}
                >
                    Показать
                </button>
                <button className={s.button} onClick={showAllPlaces}>
                    &#8634;
                </button>
            </div>

            <table className={s.table}>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>Х</th>
                        <th>У</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{placesList}</tbody>
            </table>
            {show && (
                <EditForm
                    places={places}
                    setPlaces={setPlaces}
                    changedName={changedName}
                    changedX={changedX}
                    changedY={changedY}
                    setChangedName={setChangedName}
                    setChangedX={setChangedX}
                    setChangedY={setChangedY}
                    setShow={setShow}
                    position={position}
                    setInfo={setInfo}
                    info={info}
                    building={building}
                    kvartirs={kvartirs}
                    setBuilding={setBuilding}
                    setKvartirs={setKvartirs}
                />
            )}
        </>
    );
};
