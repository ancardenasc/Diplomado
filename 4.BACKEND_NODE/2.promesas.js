function verificarUsuario(){
  const usuario ={
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
  };

  return new Promise((resolve, reject) => {
    console.log("verificando usuario...");
    setTimeout(() => {
      if(usuario.nombre === "Juan"){
        resolve(usuario.edad);
      } else {
        reject("Usuario no encontrado");
      }
    }, 2000);
  });
}

//Como invocar la promesa

/* verificarUsuario()
.then((usuario) => {
  console.log("Usuario verificado:", usuario);
})
.catch((error) => {
  console.error("Error:", error);
})
.finally(() => {
  console.log("Proceso de verificación finalizado");
}); */

//Async/Await
async function verificarUsuarioAsync() {
  try {
    const usuario = await verificarUsuario();
    console.log("Usuario verificado:", usuario);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Proceso de verificación finalizado");
  }
}

verificarUsuarioAsync();