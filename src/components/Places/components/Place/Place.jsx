import React from "react";

export const Place = ({
    name,
    place,
    index,
    deletePlace,
    setShow,
    changePlace,
}) => {
    const handleEdit = () => {
        setShow(true);
        changePlace();
    };
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{place[0].toFixed(4)}</td>
                <td>{place[1].toFixed(4)}</td>
                <td>
                    <button onClick={handleEdit}> &#9998;</button>
                    <button onClick={deletePlace}>&#10006;</button>
                </td>
            </tr>
        </>
    );
};
