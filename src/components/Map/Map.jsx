import DG from "2gis-maps";
import { useEffect } from "react";

export const Map = ({ places, setPlaces }) => {
    useEffect(() => {
        const getPlaces = async () => {
            const res = await fetch(
                "https://62b48976da3017eabb0cb5ed.mockapi.io/places"
            );
            if (res.ok) {
                const json = await res.json();
                setPlaces(json);
            } else {
                console.log("error");
            }
        };
        getPlaces();
    }, [setPlaces]);
    useEffect(() => {
        let map;
        map = DG.map("map-container", {
            center: [42.96789913375842, 47.51181100753268],
            zoom: 13.5,
        });

        places.map((item, i) => {
            return DG.marker(item.place)
                .addTo(map)
                .bindPopup(
                    `<div>${item.name}</div><img src='/images/${item.name
                        .toLowerCase()
                        .replace(" ", "_")}.jpg' alt="building" />`
                );
        });

        return () => map && map.remove();
    }, [places]);
    return (
        <div
            id="map-container"
            style={{ width: "65vw", height: "100vh" }}
        ></div>
    );
};
