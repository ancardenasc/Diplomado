document.addEventListener("DOMContentLoaded", () => {
  cargarTareas();
  mostrarTareas();

  document.getElementById("addTaskBtn").addEventListener("click", () => {
    const taskName = document.getElementById("taskName").value;
    agregarTarea(taskName);
    taskName.value = "";
  });

  document.getElementById("showAllBtn").addEventListener("click", () => mostrarTareas());
  document.getElementById("showCompletedBtn").addEventListener("click", () => mostrarTareas(true));
  document.getElementById("showIncompleteBtn").addEventListener("click", () => mostrarTareas(false));
});
