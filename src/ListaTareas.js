import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filtros from './Filtros'; // Importamos el componente Filtros

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada, filtrarTareas }) {
    return (
        <div className="task-list">
            <div className="mb-3">
                <label htmlFor="filtroSelect" className="form-label">Filtrar por:</label>
                <select id="filtroSelect" className="form-select" onChange={(e) => filtrarTareas(e.target.value)}>
                    <option value="Todas">Todas</option>
                    <option value="Pendientes">Pendientes</option>
                    <option value="Completadas">Completadas</option>
                </select>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Tarea</th>
                        <th scope="col">Acciones</th>
                        <th scope="col"></th> {/* Agregamos una columna vacía para el filtro */}
                    </tr>
                </thead>
                <tbody style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {tareas.map((tarea, index) => (
                        <tr key={index} className={tarea.completada ? 'completed' : ''}>
                            <td>{tarea.texto}</td>
                            <td>
                                <button className="btn btn-success btn-sm me-2" onClick={() => toggleCompletada(index)}>
                                    {tarea.completada ? 'Desmarcar' : 'Completar'}
                                </button>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => editarTarea(index, prompt('Editar tarea:', tarea.texto))}>
                                    Editar
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => eliminarTarea(index)}>Eliminar</button>
                            </td>
                            <td></td> {/* Celda vacía para mantener la alineación */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaTareas;
