import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [mensaje, setMensaje] = useState('');

  const manejarCambio = (e) => {
    setMensaje(e.target.value);
  };

  const manejarSubmit = () => {
    if (mensaje.trim()) {
      onAddTask(mensaje);
      setMensaje('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={mensaje}
        onChange={manejarCambio}
        placeholder="Nueva tarea..."
      />
      <button onClick={manejarSubmit}>Agregar Tarea</button>
    </div>
  );
}

export default TaskInput;
