import DG from "2gis-maps";
import { useEffect } from "react";

export const Map = ({ places }) => {
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
                    `<div class="popup"><div class="popup__name">${
                        item.name
                    }</div><img class="popup__image" src='/images/${item.name
                        .toLowerCase()
                        .replace(" ", "_")}.jpg' alt="building" /></div>`
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
