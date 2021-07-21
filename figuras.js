// Código del cuadrado
console.group("Cuadrado");
const  ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const  perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado  + " cm");

const  areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado  + " cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulo")
const  ladoTriángulo1 = 6;
const  ladoTriángulo2 = 6;
const  baseTriángulo = 4;
const  alturaTriángulo = 5.5;
console.log("Los lados del triángulo miden: " + ladoTriángulo1 + " cm, " + ladoTriángulo2 + " cm, " + baseTriángulo + " cm, ");
const perimetroTriangulo = ladoTriángulo1 + ladoTriángulo2 + baseTriángulo;
console.log("El perímetro del triángulo mide: " + perimetroTriangulo);
const areaTriangulo = (alturaTriángulo * baseTriángulo) / 2
console.log("El área del triángulo mide: " + areaTriangulo);
console.groupEnd()

// Código del círculo
console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("La circunferencia del cítulo es: " + perimetroCirculo +  " cm")

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + " cm")

console.groupEnd();