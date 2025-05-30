// Callback es una función que se pasa como argumento a otra función y se ejecuta después de que esa función haya completado su tarea.

function obtenerDatos(Callback){
  const datos = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
  };
  console.log("obteniendo datos...");
  setTimeout(() => {
    Callback(datos);
  }, 2000);
}

function procesarDatos(datos){
  console.log(datos);
  console.log("datos procesados");
}

obtenerDatos(procesarDatos);
console.log("hola mundo");