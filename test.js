// test.js - Prueba de reglas personalizadas en Cursor 🎯

const nombre = "Alejandra";
const edad = 39;

// Regla: mostrar nombre de la variable
console.log(nombre); // ¿Sugerencia: console.log("nombre", nombre)?

function saludar(usuario) {
  console.log("Hola", usuario); // ¿Sugerencia: console.log("usuario", usuario)?
}

saludar(nombre);

const persona = {
  nombre: "Ale",
  rol: "QA Tester",
  modo: "dark"
};

console.log(persona.modo); // ¿Sugerencia: console.log("modo", persona.modo)?

if (edad >= 18) {
  console.log("Es mayor de edad");
}

