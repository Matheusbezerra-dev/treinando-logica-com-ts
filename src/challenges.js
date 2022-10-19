/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable array-callback-return */
/* eslint-disable complexity */
// Desafio 1
const compareTrue = (a, b) => (!!(a && b === true));
// Desafio 2
const calcArea = (base, height) => ((base * height) / 2);
// Desafio 3
const splitSentence = (frase) => frase.split(' ');
// Desafio 4
const concatName = (name) => `${name[name.length - 1]}, ${name[0]}`;
// Desafio 5
const footballPoints = (wins, ties) => (wins * 3) + (ties);
// Desafio 6
const highestCount = (numbers) => {
  let sum = 0;
  let numberBigger = numbers[0];
  numbers.map((element) => {
    if (element > numberBigger) {
      numberBigger = element;
    }
  });
  numbers.map((item) => {
    if (item === numberBigger) {
      sum += 1;
    }
  });
  return sum;
};
// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
};
// Desafio 8
const fizzBuzz = (array) => {
  const returnstring = [];
  array.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      returnstring.push('fizzBuzz');
    } else if (number % 3 === 0) {
      returnstring.push('fizz');
    } else if (number % 5 === 0) {
      returnstring.push('buzz');
    } else {
      returnstring.push('bug!');
    }
  });
  return returnstring;
};
// Desafio 9
const encode = (array1) => {
  let codificado = '';
  for (let letter of array1) {
    if (letter === 'a') {
      codificado += '1';
    } else if (letter === 'e') {
      codificado += '2';
    } else if (letter === 'i') {
      codificado += '3';
    } else if (letter === 'o') {
      codificado += '4';
    } else if (letter === 'u') {
      codificado += '5';
    } else {
      codificado += letter;
    }
  }
  return codificado;
};

const decode = (array2) => {
  let decodificado = '';
  for (let numb of array2) {
    if (numb === '1') {
      decodificado += 'a';
    } else if (numb === '2') {
      decodificado += 'e';
    } else if (numb === '3') {
      decodificado += 'i';
    } else if (numb === '4') {
      decodificado += 'o';
    } else if (numb === '5') {
      decodificado += 'u';
    } else {
      decodificado += numb;
    }
  }

  return decodificado;
};
// Desafio 10
const techList = (arr, nome) => {
  const array = [];
  arr.sort().map((item) => {
    let obj = {
      tech: '',
      name: '',
    };
    obj.tech = item;
    obj.name = nome;
    array.push(obj);
  });
  if (arr.length < 1) {
    return 'Vazio!';
  }

  return array;
};
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
