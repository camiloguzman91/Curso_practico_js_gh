// Código del cuadrado
console.group("Cuadrado");

function  perimetroCuadrado(lado) {
  return lado * 4;
};

console.log("El perímetro del cuadrado mide: " + perimetroCuadrado  + " cm");

function areaCuadrado(lado) {
  return lado * lado;
}
console.log("El área del cuadrado es: " + areaCuadrado  + " cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulo")
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
} 
const areaTriangulo = (base, altura) => {
  return (base * altura) / 2;
}
console.log("El área del triángulo mide: " + areaTriangulo);
console.groupEnd()

// Código del círculo
console.group("Círculos");

// Radio
const radioCirculo = 4;

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área

function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


//HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}