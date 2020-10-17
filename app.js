const fs = require("fs");
const readMe = fs.readFileSync("file.txt", "utf8");
// const arr = []
const mas = readMe.split(" "); // розбиваю в масив по пробілу

// Лапласа
console.log("Завдання варіанту:");
console.log(mas);
console.log("Обрахунок методом Лапласа: ");

const stan = 0.33;
let vutratu = [];
let formula1;

for (let i = 0; i < mas.length; i += 3) {
  formula1 = stan * (Number(mas[i]) + Number(mas[i + 1]) + Number(mas[i + 2]));
  vutratu.push(formula1);
}

console.log(`Значення для кожної строки матриці: ${vutratu}`);

let min = Math.min(...vutratu);

console.log(`Мінімальне значення = ${min}`);

let laplas = [];

if (min === vutratu[0]) {
  for (let i = 0; i < 3; i++) {
    laplas.push(mas[i]);
  }
} else if (min === vutratu[1]) {
  for (let i = 3; i < 6; i++) {
    laplas.push(mas[i]);
  }
} else {
  for (let i = 6; i < 9; i++) {
    laplas.push(mas[i]);
  }
}
console.log(`Найкращі значення у рядку: ${laplas}`);

// Вальда

console.log("Метод Вальда: ");

// метод Вальда, в кожному рядку вибрати максимальне значення, потім мінімальне зі всіх максимальних - виграшний варіант
let maxValda1 = [];
let maxValda2 = [];
let maxValda3 = [];

for (let i = 0; i < mas.length; i++) {
  if (i === 0 || i === 1 || i === 2) {
    maxValda1.push(mas[i]);
  } else if (i === 3 || i === 4 || i === 5) {
    maxValda2.push(mas[i]);
  } else {
    maxValda3.push(mas[i]);
  }
}

let maxNumValda = []; // Максимальне значення кожного рядка з таблиці
maxNumValda.push(Math.max(...maxValda1));
maxNumValda.push(Math.max(...maxValda2));
maxNumValda.push(Math.max(...maxValda3));

console.log(`max a ij =  ${maxNumValda}`);

let minVald = Math.min(...maxNumValda);
const vald = [];

console.log(`min (max a ij) = ${minVald}`);

if (minVald === maxNumValda[0]) {
  for (let i = 0; i < 3; i++) {
    vald.push(mas[i]);
  }
} else if (minVald === maxNumValda[1]) {
  for (let i = 3; i < 6; i++) {
    vald.push(mas[i]);
  }
} else {
  for (let i = 6; i < 9; i++) {
    vald.push(mas[i]);
  }
}
console.log(`Найкращі значення методом Вальда у рядку: ${vald}`);

//Гурвіца
const a = 0.5; // Нехай а = 0.5

console.log("Методом Гурвіца: ");

// Мінімальне значення і максимальне, max[0] min[0] => formula

let minNumGurv = []; // Мінімальні значення в рядках

minNumGurv.push(Math.min(...maxValda1));
minNumGurv.push(Math.min(...maxValda2));
minNumGurv.push(Math.min(...maxValda3));

console.log(`Максимальні значення у рядках ${maxNumValda}`);
console.log(`Мінімальні значення у рядках ${minNumGurv}`);

let massGurvica = [];

massGurvica.push(a * Number(minNumGurv[0]) + (1 - a) * Number(maxNumValda[0]));
massGurvica.push(a * Number(minNumGurv[1]) + (1 - a) * Number(maxNumValda[1]));
massGurvica.push(a * Number(minNumGurv[2]) + (1 - a) * Number(maxNumValda[2]));

console.log(`Значення Гурвіца для кожного рядка: ${massGurvica}`);

console.log(`Найркаще значення методом Гурвіца: ${Math.min(...massGurvica)}`);

let minGurv = Math.min(...massGurvica);
let gurv = [];

if (minGurv === massGurvica[0]) {
  for (let i = 0; i < 3; i++) {
    gurv.push(mas[i]);
  }
} else if (minGurv === massGurvica[1]) {
  for (let i = 3; i < 6; i++) {
    gurv.push(mas[i]);
  }
} else {
  for (let i = 6; i < 9; i++) {
    gurv.push(mas[i]);
  }
}

console.log(`Найкращі значення методом Вальда у рядку: ${gurv}`);

//Байеса - Лапласа
const p1 = 0.5;
const p2 = 0.35;
const p3 = 0.15;
console.log(
  `Метод Байеса - Лапласа при значенню p1 = ${p1}, p2 = ${p2}, p3 = ${p3}`
);
let bayes = [];

for (let i = 0; i < mas.length; i += 3) {
  bayes.push(
    Number(mas[i]) * p1 + Number(mas[i + 1]) * p2 + Number(mas[i + 2]) * p3
  );
}
console.log(`Значення Байеса в кожному рядку ∑(an,j p j) = ${bayes}`);

console.log(`Найкраще значення методом Байеса: ${Math.max(...bayes)}`);

let maxBayes = Math.max(...bayes);
let resBayes = [];

if (maxBayes === bayes[0]) {
  for (let i = 0; i < 3; i++) {
    resBayes.push(mas[i]);
  }
} else if (maxBayes === bayes[1]) {
  for (let i = 3; i < 6; i++) {
    resBayes.push(mas[i]);
  }
} else {
  for (let i = 6; i < 9; i++) {
    resBayes.push(mas[i]);
  }
}

console.log(`Найкращі значення методом Байеса у рядку: ${resBayes}`);
