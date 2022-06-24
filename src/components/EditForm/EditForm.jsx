import React from "react";
import s from "./EditForm.module.css";

export const EditForm = ({
    changedName,
    changedX,
    changedY,
    setChangedName,
    setChangedX,
    setChangedY,
    setShow,
    places,
    setPlaces,
    position,
}) => {
    const changePost = async (e) => {
        e.preventDefault();

        const updatedPosts = [...places];
        updatedPosts[position] = {
            ...updatedPosts[position],
            name: changedName,
            place: [parseFloat(changedX), parseFloat(changedY)],
        };

        const response = await fetch(
            "https://62b48976da3017eabb0cb5ed.mockapi.io/places/" +
                updatedPosts[position].id,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedPosts[position]),
            }
        );

        if (response.ok) {
            const updatedPostFromServer = await response.json();
            setPlaces(
                places.map((post) => {
                    if (post.id === updatedPostFromServer.id) {
                        return updatedPostFromServer;
                    }

                    return post;
                })
            );
        } else {
            console.log(`Error`);
        }

        setShow(false);
    };
    return (
        <>
            <form onSubmit={changePost} className={s.form}>
                <h1>Форма изменения данных</h1>
                <input
                    value={changedName}
                    onChange={(e) => setChangedName(e.target.value)}
                    type="text"
                />
                <input
                    value={changedX}
                    onChange={(e) => setChangedX(e.target.value)}
                    type="text"
                />
                <input
                    value={changedY}
                    onChange={(e) => setChangedY(e.target.value)}
                    type="text"
                />
                <button type="submit">Изменить</button>
            </form>
            <div onClick={() => setShow(false)} className={s.overlay}></div>
        </>
    );
};
