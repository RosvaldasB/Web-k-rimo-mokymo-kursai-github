/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

let labas = 1;
while( labas <= 10) {
    console.log("labas");
    labas++; 
}

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/

let num1 = 0;
while(num1 < 10) {
    console.log(num1);
    num1 += 1;
}

/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

let augalai = ["aguona", "agurkas", "mėta", "gvazdikas", "rožė", "pomidoras", "čiobrelis", "ramunėlė", "timsra", "šalavijas"]
console.log(augalai)

/* 04.
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/
let augalai2 = ["aguona", "agurkas", "mėta", "gvazdikas", "rožė", "pomidoras", "čiobrelis", "ramunėlė", "timsra", "šalavijas"]
for(let i = 0; i < augalai2.length; i++) {
    console.log(augalai2[i]);   // funkcija ismesti array, masyvus i atskerus eilutis
}

/* 05.
Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/

let augalai3 = ["aguona", "agurkas", "mėta", "gvazdikas", "rožė", "pomidoras", "čiobrelis", "ramunėlė", "timsra", "šalavijas"];
console.log(augalai3.reverse());

/* 06.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/

let num152 = 10;
for(w=10; w <= 50; w+=2) {
    console.log(num152);
    num152 +=2;
}

/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/


for(w=10; w <= 50; w++) {
    if(w % 2 == 0) {        // pradejau nuo w%10 ir nesigavo turejau pirma patikrinti lyginius su w%2 juos pasizymeti ir tik tada atrinkti w%10
        if(w % 10 == 0) {
            continue;
        }else {
            console.log(w); 
        }
    }
}

/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

var por1 = 0;
for(i = 1; i < 20; i++) {
    if(por1 % 2 == 0) {
        console.log(por1)
    }
}


/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

let augalai4 = ["aguona", "agurkas", "mėta", "gvazdikas", "rožė", "pomidoras", "čiobrelis", "ramunėlė", "timsra", "šalavijas"];
maznegu5 = augalai4.filter(word => word.length < 5);
daugnegu7 = augalai4.filter(word => word.length > 7);

console.log(maznegu5, daugnegu7)

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

Math.floor(Math.random() * 301)

var skaic2 = new Array(300).fill(0).map(_ => Math.floor(Math.random() * 301) | 0)
daugnegu150 = skaic2.filter(Number => Number > 150);
var daugnegu275 = skaic2.filter(Number => Number > 275);

for(i=0; i < skaic2.length; i++){
    if(i > x === 275){
        i += "[" + i + "]";
    }
}
console.log(daugnegu150,)

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

var s02 = 1;
for(s02=1; s02 <= 3000; s02++)
    if(s02 % 77 == 0) {
        console.log(s02.join(", "+ [s02]));          
        }

//join funkcija

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

let kvad = 1;
while( kvad <= 10) {
    console.log("**********");
    kvad++; 
}