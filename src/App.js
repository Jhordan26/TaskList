import React, { useState } from 'react';
import './App.css';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';

function App() {
    const [tareas, setTareas] = useState([]);
    const [filtro, setFiltro] = useState("Todas");

    const agregarTarea = (texto) => {
        setTareas([...tareas, { texto, completada: false }]);
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(index, 1);
        setTareas(nuevasTareas);
    };

    const editarTarea = (index, nuevoTexto) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].texto = nuevoTexto;
        setTareas(nuevasTareas);
    };

    const toggleCompletada = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].completada = !nuevasTareas[index].completada;
        setTareas(nuevasTareas);
    };

    const filtrarTareas = (filtro) => {
        setFiltro(filtro);
    };

    let tareasFiltradas = tareas;
    if (filtro === "Pendientes") {
        tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
    } else if (filtro === "Completadas") {
        tareasFiltradas = tareas.filter((tarea) => tarea.completada);
    }

    return (
        <div className="App container">
            <h1 className="my-4">Lista de Tareas</h1>
            <TareaForm agregarTarea={agregarTarea} />
            <ListaTareas
                tareas={tareasFiltradas}
                eliminarTarea={eliminarTarea}
                editarTarea={editarTarea}
                toggleCompletada={toggleCompletada}
                filtrarTareas={filtrarTareas}
            />
        </div>
    );
}

export default App;
