import React from 'react';

function TaskItem({ tarea, onDeleteTask }) {
  return (
    <li>
      {tarea.descripcion}
      <button onClick={() => onDeleteTask(tarea.id)}>Eliminar</button>
    </li>
  );
}

export default TaskItem;
