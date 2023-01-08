import React from 'react';

const WindowDelete = ({id, getDelete}) => {
    const hostName = 'http://otdushi-na-okna/';
    const del = (e) => {
        e.preventDefault()
        axios.default.witchCredentials = true;
        axios.delete(hostName + `api/window/delete/${id}`).then(res => {
            getDelete(res.data.window)
        })
            .catch((e)=>{
                console.log("Ошибка", e)
            })
    }

    return (
        <form onSubmit={del}>
            <button type='submit'>Удалить</button>
        </form>
    );
};

export default WindowDelete;
