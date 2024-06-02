import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TareaForm({ agregarTarea }) {
    const [texto, setTexto] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (texto.trim()) {
            agregarTarea(texto);
            setTexto("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Añadir nueva tarea"
                />
                <button type="submit" className="btn btn-primary">Añadir</button>
            </div>
        </form>
    );
}

export default TareaForm;
