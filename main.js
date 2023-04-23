//Aplicacion para calcular el promedio de las notas y que a la vez te diga si estas aprobado o no

let i = parseInt(prompt("¿Cuántas notas tiene el alumno?"));
let nota = 0;
let sum = 0;


function calcpromedio() {
    let i = parseInt(prompt("¿Cuántas notas tiene el alumno?"));
    let nota = 0;
    let sum = 0;
  
    while (isNaN(i)) {
      console.log("El valor ingresado no es un número.");
      i = parseInt(prompt("Ingrese un número de notas:"));
    }
  
    for (let j = 0; j < i; j++) {
      do {
        nota = parseInt(prompt("Ingrese la nota número " + (j+1) + " sin comas ni puntos"));
      } while (isNaN(nota));
  
      sum += nota;
    }
  
    let promedio = sum / i;
  
    if (promedio < 39) {
      alert("HAS REPROBADO CON UNA NOTA DE " + promedio.toFixed(2) + ", VE A HABLAR CON EL PROFESOR O NO HAY MESADA");
    } else {
      alert("APROBASTE! CON UNA NOTA DE " + promedio.toFixed(2) + " , PUEDES TOMARTE UNA CERVEZA TRANQUILO!");
    }
  }
  
  calcpromedio();
