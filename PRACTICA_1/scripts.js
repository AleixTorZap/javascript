//Comparador de textos
var input1 = document.getElementById('c1');
var input2 = document.getElementById('c2');
var resultado = document.getElementById('resultado');

input1.addEventListener('input', compararInputs);
input2.addEventListener('input', compararInputs);

function compararInputs() {
  var valorInput1 = c1.value;
  var valorInput2 = c2.value;

  if (valorInput1 === valorInput2) {
    resultado.textContent = "=";
  } else {
    resultado.textContent = "=/=";
  }
}
//CONTAR HASTA 30
var input3 = document.getElementById("contador");
var resultado2 = document.getElementById('resultado2');

input3.addEventListener('input', contarLetras);

function contarLetras() {
  var texto = input3.value;

  if (texto.length > 30) {
    texto = texto.substring(0, 30);
  }

  resultado2.textContent = "Número de letras: " + texto.length;
}
//RAIZ CUADRADA
var inputRaiz = document.getElementById("inputRaiz");
var resultadoRaiz = document.getElementById("resultadoRaiz");

inputRaiz.addEventListener("input", function () {
  var valor = parseFloat(inputRaiz.value);

  if (!isNaN(valor)) {
    var raizCuadrada = Math.sqrt(valor);
    resultadoRaiz.textContent = "La raíz cuadrada es: " + raizCuadrada;
  } else {
    resultadoRaiz.textContent = "Entrada no válida";
  }
})

//CONCATENA TEXTOS
var vinput1 = document.getElementById("vinput1");
var vinput2 = document.getElementById("vinput2");
var resultado3 = document.getElementById("resultado4");

vinput1.addEventListener("input", concatenarTextos);

vinput2.addEventListener("input", concatenarTextos);

function concatenarTextos() {
  var texto1 = vinput1.value;
  var texto2 = vinput2.value;

  resultado3.textContent = " " + texto1 + texto2;
}

//CAMBIO DE COLOR
var radioNaranja = document.getElementById("radioNaranja");
var radioVerde = document.getElementById("radioVerde");
var radioAzul = document.getElementById("radioAzul");
var texto = document.getElementById("texto");

// Add a change event listener to the radio buttons
radioNaranja.addEventListener("change", cambiarColor);
radioVerde.addEventListener("change", cambiarColor);
radioAzul.addEventListener("change", cambiarColor);

function cambiarColor(event) {
  if (event.target.checked) {
    switch (event.target.id) {
      case "radioNaranja":
        texto.style.color = "orange";
        break;
      case "radioVerde":
        texto.style.color = "green";
        break;
      case "radioAzul":
        texto.style.color = "blue";
        break;
    }
  }
}
//CAMBIO DE TAMAÑO
var alturaInput = document.getElementById("alturaInput");
var anchuraInput = document.getElementById("anchuraInput");
var circulo = document.getElementById("circulo");

function actualizarCirculo() {
  var altura = alturaInput.value + "px";
  var anchura = anchuraInput.value + "px";

  circulo.style.width = anchura;
  circulo.style.height = altura;
  circulo.style.borderRadius = "50%";
  circulo.style.backgroundColor = "blue";
}

alturaInput.addEventListener("input", actualizarCirculo);
anchuraInput.addEventListener("input", actualizarCirculo);

actualizarCirculo();


//ADIVINAR LA PALABRA
let palabra = document.getElementById("palabra");
let letras = document.getElementById("letras");

palabra.addEventListener("input", letrasAdivinadas);

const palabras = ["javascript", "adivinar", "programar"];
let pSecreta = palabraSecreta();

function palabraSecreta() {
  let random = Math.floor(Math.random() * palabras.length);
  return palabras[random];
}

function letrasAdivinadas() {
  let palabraAdivinada = palabra.value;
  let lCorrectas = 0;

  for (let i = 0; i < pSecreta.length; i++) {
    if (palabraAdivinada.includes(pSecreta[i])) {
      lCorrectas++;
    }
  }

  letras.textContent = "Letras correctas: " + lCorrectas;

  if (lCorrectas == pSecreta.length) {
    letras.textContent = "Has adivinado la palabra"
  }
}
