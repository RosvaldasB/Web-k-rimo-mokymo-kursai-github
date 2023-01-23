
/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

let vard = "Ai "
let pava = "Skauda"
let ThisYear = new Date().getFullYear()
let BirthYear = 1970
let metai = ThisYear - BirthYear
console.log(`"` + "Aš esu " + vard  + pava + ". " + "Man yra " + metai + " metai" + `".`);

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

let a = Math.floor(Math.random() * 5);
let b = Math.floor(Math.random() * 5);
console.log((Math.max(a, b) / Math.min(a, b)).toFixed(2))

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let x = Math.floor(Math.random() * 26);
let y = Math.floor(Math.random() * 26);
let z = Math.floor(Math.random() * 26);

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

let kr1 = Math.floor(Math.random() *11)
let kr2 = Math.floor(Math.random() *11)
let kr3 = Math.floor(Math.random() *11)

if (kr1, kr2, kr3 == 0) {
    console.log("Netrikampis! :(")
} else {
    console.log("Trikampis!")
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

let kin1 = Math.floor(Math.random() * 3)
let kin2 = Math.floor(Math.random() * 3)
let kin3 = Math.floor(Math.random() * 3)
let kin4 = Math.floor(Math.random() * 3)



/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
 
let sk1 = Math.floor((Math.random() * (11 + -10 +1) - -10))

console.log(sk1)


/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

let zvk = Math.floor(Math.random() * (3000 - 5) + 5)
let kaina = zvk

if (zvk < 1000){
    console.log(zvk, zvk)
} else if (1000 >= zvk >= 2000) {
    console.log(zvk, kaina*0.97)
}else (2000 >= zvk)
    console.log(zvk, (kaina*0.96).toFixed(2))

    /* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

skait = Math.floor(Math.random() * 100)
skait = Math.floor(Math.random() * 100)
skait = Math.floor(Math.random() * 100)


/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

let A = Math.floor(Math.random() * (10000 - 1000) + 1000);
let B = Math.floor(Math.random() * (10000 - 1000) + 1000);
let C = Math.floor(Math.random() * (10000 - 1000) + 1000);
let D = Math.floor(Math.random() * (10000 - 1000) + 1000);
let E = Math.floor(Math.random() * (10000 - 1000) + 1000);
let F = Math.floor(Math.random() * (10000 - 1000) + 1000);

var min = Math.min(A, B, C, D, E, F);
var max = Math.max(A, B, C, D, E, F);

var kl = max > A || B || C || D || E || F >  A || B || C || D || E || F  >  A || B || C || D || E || F  >  A || B || C || D || E || F  >  A || B || C || D || E || F  >  A || B || C || D || E || F >= min
console.log(kl)


//if (numb1, numb2, numb3, numb4, numb5, numb6 > numb1, numb2, numb3, numb4, numb5, numb6 > numb1, numb2, numb3, numb4, numb5, numb6 > numb1, numb2, numb3, numb4, numb5, numb6 > numb1, numb2, numb3, numb4, numb5, numb6 > numb1, numb2, numb3, numb4, numb5, numb6) {
 //   casd(visaginas)
//} else {
//    console.log(konstantinasciurlionis)
//}