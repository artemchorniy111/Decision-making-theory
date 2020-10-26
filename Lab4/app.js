const fs = require("fs");
const readline = require("readline");
const readMe = fs.readFileSync("name.txt", "utf8");
const readMe2 = fs.readFileSync("parameters.txt", "utf8");
const exp1 = fs.readFileSync("exp1.txt", "utf8");
const exp2 = fs.readFileSync("exp2.txt", "utf8");
const exp3 = fs.readFileSync("exp3.txt", "utf8");
const exp4 = fs.readFileSync("exp4.txt", "utf8");
const masCars = readMe.split(" "); // розбиваю в масив по пробілу
const masParameters = readMe2.split(" "); // розбиваю в масив по пробілу
const masExp1 = exp1.split(" "); 
const masExp2 = exp2.split(" "); 
const masExp3 = exp3.split(" "); 
const masExp4 = exp4.split(" "); 
 

console.log("Вибір автомобіля:");
console.log(masCars);
console.log("Параметри автомобіля:");
console.log(masParameters);

const speedZiroBmw = Number.parseFloat(masExp1[0]) + Number.parseFloat(masExp2[0]) + Number.parseFloat(masExp3[0]) + Number.parseFloat(masExp4[0]);
const speedZiroAudi = Number.parseFloat(masExp1[1]) + Number.parseFloat(masExp2[1]) + Number.parseFloat(masExp3[1]) + Number.parseFloat(masExp4[1]);
const speedZiroMercedes = Number.parseFloat(masExp1[2]) + Number.parseFloat(masExp2[2]) + Number.parseFloat(masExp3[2]) + Number.parseFloat(masExp4[2]);
const speedZiroPorsche = Number.parseFloat(masExp1[3]) + Number.parseFloat(masExp2[3]) + Number.parseFloat(masExp3[3]) + Number.parseFloat(masExp4[3]);
///
const maxSpeedBmw = Number.parseFloat(masExp1[4]) + Number.parseFloat(masExp2[4]) + Number.parseFloat(masExp3[4]) + Number.parseFloat(masExp4[4]);
const maxSpeedAudi = Number.parseFloat(masExp1[5]) + Number.parseFloat(masExp2[5]) + Number.parseFloat(masExp3[5]) + Number.parseFloat(masExp4[5]);
const maxSpeedMercedes = Number.parseFloat(masExp1[6]) + Number.parseFloat(masExp2[6]) + Number.parseFloat(masExp3[6]) + Number.parseFloat(masExp4[6]);
const maxSpeedPorsche = Number.parseFloat(masExp1[7]) + Number.parseFloat(masExp2[7]) + Number.parseFloat(masExp3[7]) + Number.parseFloat(masExp4[7]);
///
const CruiseBmw = Number.parseFloat(masExp1[8]) + Number.parseFloat(masExp2[8]) + Number.parseFloat(masExp3[8]) + Number.parseFloat(masExp4[8]);
const CruiseAudi = Number.parseFloat(masExp1[9]) + Number.parseFloat(masExp2[9]) + Number.parseFloat(masExp3[9]) + Number.parseFloat(masExp4[9]);
const CruiseMercedes = Number.parseFloat(masExp1[10]) + Number.parseFloat(masExp2[10]) + Number.parseFloat(masExp3[10]) + Number.parseFloat(masExp4[10]);
const CruisePorsche = Number.parseFloat(masExp1[11]) + Number.parseFloat(masExp2[11]) + Number.parseFloat(masExp3[11]) + Number.parseFloat(masExp4[11]);
///
const RoofBmw = Number.parseFloat(masExp1[12]) + Number.parseFloat(masExp2[12]) + Number.parseFloat(masExp3[12]) + Number.parseFloat(masExp4[12]);
const RoofAudi = Number.parseFloat(masExp1[13]) + Number.parseFloat(masExp2[13]) + Number.parseFloat(masExp3[13]) + Number.parseFloat(masExp4[13]);
const RoofMercedes = Number.parseFloat(masExp1[14]) + Number.parseFloat(masExp2[14]) + Number.parseFloat(masExp3[14]) + Number.parseFloat(masExp4[14]);
const RoofPorsche = Number.parseFloat(masExp1[15]) + Number.parseFloat(masExp2[15]) + Number.parseFloat(masExp3[15]) + Number.parseFloat(masExp4[15]);
/// Weight
const weightSpeedZiro = speedZiroBmw + speedZiroAudi + speedZiroMercedes + speedZiroPorsche;
const weightMaxSpeed = maxSpeedBmw + maxSpeedAudi + maxSpeedMercedes + maxSpeedPorsche;
const weightCruise = CruiseBmw + CruiseAudi + CruiseMercedes + CruisePorsche; 
const weightRoof = RoofBmw + RoofAudi + RoofMercedes + RoofPorsche;

const sumWeight = weightSpeedZiro + weightMaxSpeed + weightCruise + weightRoof;
const sumBmw = speedZiroBmw + maxSpeedBmw + CruiseBmw + RoofBmw;
const sumAudi = speedZiroAudi + maxSpeedAudi + CruiseAudi + RoofAudi;
const sumMercedes = speedZiroMercedes + maxSpeedMercedes + CruiseMercedes + RoofMercedes;
const sumPorsche = speedZiroPorsche + maxSpeedPorsche + CruisePorsche + RoofPorsche;


console.log (`ШВИДКІСТЬ 0-100          Вага: ${weightSpeedZiro.toFixed(2)}, BMW: ${speedZiroBmw.toFixed(2)}, Audi: ${speedZiroAudi.toFixed(2)}, Mercedes: ${speedZiroMercedes.toFixed(2)}, Porsche: ${speedZiroPorsche.toFixed(2)}`);
console.log (`МАКСИМАЛЬНА ШВИДКІСТЬ    Вага: ${weightMaxSpeed.toFixed(2)}, BMW: ${maxSpeedBmw.toFixed(2)}, Audi: ${maxSpeedAudi.toFixed(2)}, Mercedes: ${maxSpeedMercedes.toFixed(2)}, Porsche: ${maxSpeedPorsche.toFixed(2)}`);
console.log (`КРУЇЗ КОНТРОЛЬ           Вага: ${weightCruise.toFixed(2)}, BMW: ${CruiseBmw.toFixed(2)}, Audi: ${CruiseAudi.toFixed(2)}, Mercedes: ${CruiseMercedes.toFixed(2)}, Porsche: ${CruisePorsche.toFixed(2)}`);
console.log (`ПАНОРАМНА КРИША          Вага: ${weightRoof.toFixed(2)}, BMW: ${RoofBmw.toFixed(2)}, Audi: ${RoofAudi.toFixed(2)}, Mercedes: ${RoofMercedes.toFixed(2)}, Porsche: ${RoofPorsche.toFixed(2)}`);
console.log (`СУМА                     Вага: ${sumWeight.toFixed(2)}, BMW: ${sumBmw.toFixed(2)}, Audi ${sumAudi.toFixed(2)}, Mercedes: ${sumMercedes.toFixed(2)}, Porsche: ${sumPorsche.toFixed(2)}`);

