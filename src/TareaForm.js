import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === "") {
      setError("El campo no puede estar vacío");
      return;
    }
    agregarTarea(texto);
    setTexto("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Añadir tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
      {error && <p>{error}</p>}
    </form>
  );
}

TareaForm.propTypes = {
  agregarTarea: PropTypes.func.isRequired
};

export default TareaForm;
