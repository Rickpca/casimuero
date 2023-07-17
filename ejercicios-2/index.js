const btn1 = document.getElementById("ejercicio-1");
const btn2 = document.getElementById("ejercicio-2");
const btn3 = document.getElementById("ejercicio-3");
const btn4 = document.getElementById("ejercicio-4");
const btn5 = document.getElementById("ejercicio-5");

btn1.addEventListener("click", () => {
    let num = [];
    let values;
    while (true) {
      values = prompt("Teclee un número:");
  
      if (values === null) {
        break;
      }
  
      if (!isNaN(values)) {
        num.push(parseInt(values));
      } else {
        alert("Teclee números válidos.");
      }
    }
  
    if (num.length > 0) {
      let numMax = Math.max(...num);
      alert("El número máximo que ingresaste es: " + numMax);
    } else {
      alert("No se ingresaron números.");
    }
  });
  

btn2.addEventListener("click",()=>{
    let text = prompt("Teclee una frase o una palabra: ")

    
    text = text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    let textreverse = text.split("").reverse().join("")

    if(text === textreverse){
        alert("Es un palindromo");
    }
    else{
        alert("No es un palindromo")
    }

})

btn3.addEventListener("click", () => {
    let num;
    while (true) {
      num = prompt("Teclee los números que quiera");
      if (num === null) {
        break;
      }
  
      let suma = 0;
  
      for (let i = 0; i < num.length; i++) {
        suma += parseInt(num.charAt(i));
      }
  
      if (!isNaN(parseInt(num))) {
        alert("La suma de todos los números es: " + suma);
      } else {
        alert("Teclee un número válido.");
      }
    }
});


btn4.addEventListener("click", () => {
    let min = parseInt(prompt("Ingrese el rango menor:"));
    let max = parseInt(prompt("Ingrese el rango mayor:"));
  
    let random = Math.random();
    let numeroAleatorio = Math.floor(random * (max - min + 1)) + min;
  
    alert("El número aleatorio es: " + numeroAleatorio);
});

btn5.addEventListener("click", () => {
    const divR = document.getElementById("result");
  
    function generarSecuenciaFibonacci(numeroMaximo) {
      let secuencia = [0, 1];
  
      while (secuencia[secuencia.length - 1] < numeroMaximo) {
        const siguienteNumero = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
        secuencia.push(siguienteNumero);
      }
  
      if (secuencia[secuencia.length - 1] > numeroMaximo) {
        secuencia.pop();
      }
  
      return secuencia;
    }
  
    const numeroMaximo = parseInt(prompt("Ingrese el número máximo para la secuencia de Fibonacci:"));
    const secuenciaFibonacci = generarSecuenciaFibonacci(numeroMaximo);
  
    divR.innerHTML = "La secuencia de Fibonacci hasta el número máximo es: " + secuenciaFibonacci.join(", ");
  });
   
  