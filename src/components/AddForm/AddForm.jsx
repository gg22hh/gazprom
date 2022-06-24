import React, { useState } from "react";

import s from "./AddForm.module.css";

export const AddForm = ({ places, setPlaces }) => {
    const [name, setName] = useState("");
    const [x, setX] = useState("");
    const [y, setY] = useState("");

    const handleAddForm = async (e) => {
        e.preventDefault();

        const newPlace = {
            id: new Date().getTime(),
            name: name,
            place: [parseFloat(x), parseFloat(y)],
        };

        const response = await fetch(
            "https://62b48976da3017eabb0cb5ed.mockapi.io/places/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPlace),
            }
        );

        if (response.ok) {
            const newPostToServer = await response.json();
            setPlaces([...places, newPostToServer]);
        } else {
            console.log("error");
        }

        setName("");
        setX("");
        setY("");
    };

    return (
        <form className={s.form} onSubmit={handleAddForm}>
            <h1 className={s.title}>Форма добавления нового здания</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Название"
            />
            <input
                type="number"
                value={x}
                onChange={(e) => setX(e.target.value)}
                placeholder="Х"
            />
            <input
                type="number"
                value={y}
                onChange={(e) => setY(e.target.value)}
                placeholder="У"
            />
            <button type="submit">Добавить</button>
        </form>
    );
};
