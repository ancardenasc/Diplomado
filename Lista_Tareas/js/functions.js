function guardarTareas() {
  localStorage.setItem('tareas', JSON.stringify(tasks));
}

function cargarTareas() {
  const tareasGuardadas = localStorage.getItem('tareas');
  if (tareasGuardadas) {
    const tareasParseadas = JSON.parse(tareasGuardadas);
    tasks = tareasParseadas.map(tareaData => {
      const task = new Task(tareaData.name);
      task.id = tareaData.id;
      task.completed = tareaData.completed;
      return task;
    });

    if (tasks.length > 0) {
      taskId = Math.max(...tasks.map(task => task.id)) + 1;
    }
  }
}

function agregarTarea(taskName){
  if (taskName.trim() === "") return alert("No puedes agregar una tarea vacía");
  const newTask = new Task(taskName);
  tasks.push(newTask);
  guardarTareas();
  mostrarTareas();
}

function eliminarTarea(taskId){
  tasks = tasks.filter(task => task.id !== taskId);
  guardarTareas();
  mostrarTareas();
}

function filtrarTareas(completadas){
  const filteredTasks = tasks.filter(task => task.completed === completadas);
  return filteredTasks;
}

function mostrarTareas(filter= null){
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  const tasksToShow = filter ===null ? tasks : filtrarTareas(filter);

  tasksToShow.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.classList.add("list-group-item");
    const buttonClass = task.completed ? 'btn btn-secondary' : 'btn btn-danger';
    const disabledAttr = task.completed ? 'disabled' : '';
    li.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <input type="checkbox" class="form-check-input me-2" ${task.completed ? "checked" : ""} onclick="toggleTask(${task.id})">
          <span>${task.name}</span>
        </div>
        <div>
          <button class="btn ${buttonClass}"
          ${disabledAttr}
          onclick="eliminarTarea(${task.id})">
          <div class="d-flex align-items-center">
            <span class="material-icons-outlined"> delete</span> Eliminar
          </div>
          </button>
        </div>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function toggleTask(taskId){
  const task = tasks.find(task => task.id === taskId);
  if (task) task.taskCompleted();
  guardarTareas();
  mostrarTareas();
}


