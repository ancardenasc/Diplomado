//Tarea sincrona
console.log("tarea 1 sincrona");

//Macrotarea
setTimeout(() => {
  console.log("tarea 2 macrotarea");
}, 200);

console.log("tarea 3 sincrona");

//microtarea
Promise.resolve().then(() => {
  console.log("tarea 4 microtarea");
});