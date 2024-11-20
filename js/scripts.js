const rootStyles = document.documentElement.style;

const numbers = [1, 2, 4, 7, 8, 9];

//forEach - Recorre el array y aplica la función del callback, pero no devuelve resultado

numbers.forEach((number) => {
  console.log(number + 3);
});

// map - monta un nuevo array pero con lo que determinemos dentro de la función

const resultMap = numbers.map((number) => {
  if (number % 2 === 0) return `El número ${number} es par`;
  if (number % 2 !== 0) return `El número ${number} es impar`;
});
console.log(resultMap);

// filter - recorre el array y devuelve uno nuevo con los que cumplan la condición que le pongamos
// no aplica funciones dentro

const resultFilter = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(resultFilter);

// every - recorre el array y nos devuelve true o false si todos los elementos cumplen la condición dada

const resultEvery = numbers.every((number) => {
  return number < 10;
});
console.log(resultEvery);

// some - devuelve true o false si alguno de los elementos cumple la condición

const resultSome = numbers.some((number) => {
  return number > 9;
});
console.log(resultSome);

// find - recorre el array y devuelve el primer VALOR (no array) que cumple la condición

const resultFind = numbers.find((number) => {
  return number > 4;
});
console.log(resultFind);

// sort - recorre cada elemento del array y los selecciona por parejas, hay que meter dos parámetros

const numbersSort = [1, 3, 6, 4, 9, 7];

const resultSort1 = numbersSort.sort((a, b) => {
  console.log(a - b);
  return a - b;
});
console.log(resultSort1);

const lettersSort1 = ['a', 'c', 'd', 'b', 'f', 'e'];

const resultSort2 = lettersSort1.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(resultSort2);
// reduce - se hace para iterar sobre el array y llevar a un unico valor

const numbersReduce = [1, 2, 3, 5, 7, 6];

let result = 0;

for (const number of numbersReduce) {
  result += number;
}
console.log(result);

//⤴️ es lo mismo que ⤵️

const result2 = numbersReduce.reduce((acc, number) => {
  return acc + number;
});
console.log(result2);
