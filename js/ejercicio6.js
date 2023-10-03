// Definimos una función para realizar las operaciones
function realizarOperacion(operacion) {
    let resultado = 0;
    let numero;
  
    while (true) {
      numero = prompt("Ingrese un número (o '=' para finalizar):");
  
      if (numero === "=") {
        break;
      }
  
      numero = parseFloat(numero);
      if (!isNaN(numero)) {
        switch (operacion) {
          case "suma":
            resultado += numero;
            break;
          case "resta":
            resultado -= numero;
            break;
          case "multiplicación":
            resultado *= numero;
            break;
          case "división":
            resultado /= numero;
            break;
          default:
            console.log("Operación no válida.");
            return;
        }
      }
    }
  
    console.log("El resultado de la " + operacion + " es: " + resultado);
  }
  
  // Solicitamos al usuario que elija una operación
  const operacionElegida = prompt(
    "Ingrese la operación que desea realizar (suma, resta, multiplicación, división):"
  );
  
  // Llamamos a la función con la operación elegida por el usuario
  realizarOperacion(operacionElegida);