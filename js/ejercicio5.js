
/*function calcularSuma() {
    let suma = 0;
    let numero;
  
    while (true) {
      numero = prompt("Ingrese un número (o '=' para finalizar):");
  
      if (numero === "=") {
        break;
      }
  
      numero = parseFloat(numero);
      if (!isNaN(numero)) {
        suma += numero;
      }
    }
  
    console.log("La suma de los números ingresados es: " + suma);
  }
  
  calcularSuma();