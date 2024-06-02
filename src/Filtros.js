import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Filtros({ filtrarTareas }) {
    return (
        <div className="mb-3">
            <label htmlFor="filtroSelect" className="form-label">Filtrar por:</label>
            <select id="filtroSelect" className="form-select" onChange={(e) => filtrarTareas(e.target.value)}>
                <option value="Todas">Todas</option>
                <option value="Pendientes">Pendientes</option>
                <option value="Completadas">Completadas</option>
            </select>
        </div>
    );
}

export default Filtros;
