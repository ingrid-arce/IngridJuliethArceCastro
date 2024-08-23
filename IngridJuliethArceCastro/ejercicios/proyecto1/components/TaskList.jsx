import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tareas, onDeleteTask }) {
  return (
    <ul>
      {tareas.map(tarea => (
        <TaskItem key={tarea.id} tarea={tarea} onDeleteTask={onDeleteTask} />
      ))}
    </ul>
  );
}

export default TaskList;
