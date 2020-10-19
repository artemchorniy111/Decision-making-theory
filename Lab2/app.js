const fs = require("fs");
const readMe = fs.readFileSync("file.txt", "utf8");
// const arr = []
const mas = readMe.split(" "); // розбиваю в масив по пробілу

let n = 5   // ---- кількість років

console.log(`M1 = ${mas[0]}, D1 = ${mas[1]}, P1 = ${mas[2]}, D2 = ${mas[3]}, P2 = ${mas[4]}`);

console.log(`Якщо P1 = ${mas[2]}, то: `);

let aTrue = mas[1] * n - mas[0] // ---- Чистий прибуток за n років

const vidsotok = 100 / n // Річний відсоток прибутку

console.log(`Чистий прибуток за ${n} років становить ${aTrue} тисяч. Це ${aTrue / n} тисяч в рік, або ${vidsotok}% річних.`);

console.log(`Якщо P2 = ${mas[4]}, то: `);

let aFalse = mas[3] * n; // ---- Збитки за n років

console.log(`Збитки за ${n} років будуть становити ${aFalse} тисяч. Це ${mas[3]} тисяч в рік.
Сума збитків за ${n} років з ціною заводу становить -${Math.abs(aFalse) + Number(mas[0])} тисяч.`);

//////////// 2 ///////////////

console.log(`M2 = ${mas[5]}, D1 = ${mas[6]}, P1 = ${mas[7]}, D2 = ${mas[8]}, P2 = ${mas[9]}`);

console.log(`Якщо P1 = ${mas[7]}, то: `);

let bTrue = mas[6] * n - mas[5]; // ---- Чистий прибуток за n років

// const vidsotok = 100 / n // Річний відсоток прибутку

console.log(`Чистий прибуток за ${n} років становить ${bTrue} тисяч. Це ${bTrue / n} тисяч в рік, або ${vidsotok}% річних.`);

console.log(`Якщо P2 = ${mas[9]}, то: `);

let bFalse = mas[8] * n; // ---- Збитки за n років

console.log(`Збитки за ${n} років будуть становити ${bFalse} тисяч. Це ${mas[8]} тисяч в рік.
Сума збитків за ${n} років з ціною заводу становить -${Math.abs(aFalse) + Number(mas[5])} тисяч.`);

///// вибір кращого сценарія:

let aVidsotkiv = aTrue * 100 / mas[0]; // ---- Прибуток в відсотках від вартості заводу

let bVidsotkiv = bTrue * 100 / mas[5];

function abVidsotok(aVidsotkiv, bVidsotkiv){
if(aVidsotkiv > bVidsotkiv){
    console.log(`Кращий варіант А. Прибуток при ціні заводу - 100% дорівнює: ${aVidsotkiv}%`);
}else if(aVidsotkiv < bVidsotkiv){
    console.log(`Кращий варіант Б Прибуток при ціні заводу - 100% дорівнює: ${bVidsotkiv}%`);
}else{
    console.log('Два варіанти хороші (А = Б)');
};
};
abVidsotok(aVidsotkiv, bVidsotkiv);

console.log(`P3 = ${mas[10]}, P4 = ${mas[11]}, P1 = ${mas[12]}, P2 = ${mas[13]},`);

n = 4;

console.log(`Збір інформації ще один рік, n = ${n} `);

aTrue = mas[1] * n - mas[0];
bTrue = mas[6] * n - mas[5];

aVidsotkiv = aTrue * 100 / mas[0];
bVidsotkiv = bTrue * 100 / mas[5];
abVidsotok(aVidsotkiv, bVidsotkiv);
