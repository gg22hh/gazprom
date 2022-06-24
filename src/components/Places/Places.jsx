import React, { useEffect, useState } from "react";
import { EditForm } from "../EditForm/EditForm";
import { Place } from "./components/Place/Place";
import s from "./Places.module.css";

export const Places = ({ places, setPlaces }) => {
    const [show, setShow] = useState(false);
    const [filtredPlaces, setFiltredPlaces] = useState(places);
    const [search, setSearch] = useState("");
    const [changedName, setChangedName] = useState("");
    const [changedX, setChangedX] = useState("");
    const [changedY, setChangedY] = useState("");
    const [position, setPosition] = useState();
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
        setPosition(i);
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
            <input
                className={s.search}
                placeholder="Поиск"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
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
                />
            )}
        </>
    );
};
