import React,{useState} from "react";
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function app(){
    const [tareas, setTareas]= useState([]);

    const agregarTarea =(mensaje) => {
        const tareaNueva = {
            id: Date.now(),
            mensaje:mensaje
        };
        setTareas([...tareas, tareaNueva]);
    };
    const borrarTarea = (id) => {
        const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
        setTareas(nuevasTareas);
      };
    
      return (
        <div className="App">
          <h1>Gestor de Tareas</h1>
          <TaskInput onAddTask={agregarTarea} />
          <TaskList tareas={tareas} onDeleteTask={borrarTarea} />
        </div>
      );
}