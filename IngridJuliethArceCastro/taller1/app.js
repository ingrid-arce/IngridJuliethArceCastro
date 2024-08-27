let Tareas = [];

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const  taskList = document.getElementById("taskList");

function agregarTarea(mensaje){
    if(mensaje){
        const tarea ={
            id: Date.now(),
            mensaje: mensaje
        };
        Tareas.push(tarea);
        tareaNueva();
        taskInput.value ='';
    } else {
        alert("debes agregar descripcion a tus tareas.");
    }
}
// intento de subir cambio 4

function tareaNueva(){
    taskList.innerHTML ='';
    Tareas.forEach(tarea =>{
        const li = document.createElement('li');
        li.textContent = tarea.mensaje;
        const btnBorrar =document.createElement('button');
        btnBorrar.textContent = 'Borrar.';
        btnBorrar.addEventListener('click', ()=> eliminartareas(tarea.id));
        li.appendChild(btnBorrar);
        taskList.appendChild(li);
    });
}

function eliminartareas(id){
    const index = Tareas.findIndex(tarea => tarea.id === id);
    if (index !== -1){
        Tareas.splice(index, 1);
        tareaNueva();
    } else {
        alert('xd');
    }
}

addTaskBtn.addEventListener('click', () =>{
    const mensaje = taskInput.value.trim();
    agregarTarea(mensaje);
})