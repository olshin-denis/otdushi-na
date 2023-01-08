import React from 'react';
import {Link} from "react-router-dom";
import WindowDelete from "../routes/window/windowDelete";

const Windows = ({name, profil, glass_unit, fornit, cost, id, getDelete}) => {
    return (
        <>
            <div>Имя: {name}</div>
            <div>Профиль: {profil}</div>
            <div>Стеклопакет: {glass_unit}</div>
            <div>Форнитура: {fornit}</div>
            <div>Стиомость: {cost}</div>
            <Link to={`/window/${id}`}>
                <button>Редактировать</button>
            </Link>
            <WindowDelete id={id} getDelete={getDelete}/>
        </>
    );
};

export default Windows;
