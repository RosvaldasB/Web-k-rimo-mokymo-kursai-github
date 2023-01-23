/*
let num = 6 + 4;
let vcs = "Labas";
let relationship = (vcs == num);

console.log(num + ", " + vcs + ", " + typeof(vcs) + ", " + relationship)
console.log(`${num}, ${vcs}, ${typeof(vcs)}, ${relationship}`)
let vard = "Rosvaldas"
let pava = "But"
let abu = vard + ", " + pava;

console.log(abu)
let fname = "Rosvaldas";
let lnsurname = "Butkus";
//let fullName = name + ", " + lnsurname;
console.log(`${fname} ${lnsurname}`);

let x = 5;
let y = "5"; //skaicius su kabutemis traktuojamas kaip raide 

if(x == y) {
    console.log('lygu')     /* === lyginakintamojo tipa ir reiksmias 
} else {                    /* = priskiriam ir lyginam tipus 
    console.log("nelygu")   /* == prilyginam bet lyginam tik reiksmias 
}
console.log(x + y)

// javascript yra case sensitive, tie patys zodziai bet didziaja raide yra skirtingas

console.log(vcs.length)

let tekstas = "Pirmas";
console.log(tekstas.length)
console.log(tekstas.toUpperCase());
console.log(tekstas.toLowerCase());
console.log(tekstas.charAt(1)); /*indeksai sarasuose skaiciuojami nuo 0, Tai "Pirmas" pirma raide yra i, o ne P
console.log(tekstas.indexOf("m"));

tekstas = "Čia gali būti Jūsų reklama";
console.log(tekstas.replace("gali būti", "yra"));

console.log(tekstas.substring(4, 14));
console.log(tekstas.substring(14));
console.log(tekstas.substr(4, 9)) /*nuo kurio(4) ir kiek indeksų nuo 4(9)

x = 6.34;
console.log(Math.round(x));
console.log(Math.ceil(x));
console.log(Math.floor(x));

y = 5.8;
let z = 9;
console.log(Math.max(x, y, z))
console.log(Math.min(x, y, z))

let i = Math.round(Math.random() * 30);
console.log(i);

let a = Math.floor(Math.random() * (50 - 10 + 1) + 10);
console.log(a) */

//let num1 = 1;
//while (num1 <= 10) {
    //console.log(num1);
    //num1++
//}

//let suma = 0;
// suma=0, 1, 3, 6, 10, 15, 21, 28, 36, 45 ,55
// t=1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//for(let t = 1; t <= 10; t++) {
    //suma += t;
//}
// ciklo sugeneruotu skaiciu sudejimas
//console.log(suma);

//suma = 0;
//let skaiciai = [10, 20, 30, 40, 50, 60, 70, 80];
//for(let w = 0; w <skaiciai.length; w++) {
  //  suma = suma + skaiciai [w]
//}

//console.log(suma)

// true && true - t
// true && false - f
// false && true - f
// false && false - f

//alert("you have a virus!");
//confirm("Ar tikrai nori atidaryti!");
//prompt("Koks tavo vardas?");

/*
let turimVarda = false;

while(turimVarda == false)
userVardas = prompt("koks tavo vardas?");

    if(userVardas) {
        if(confirm('Ar tikrai tavo vardas $(userVardas)?')) {
            alert('Labas $(userVardas)!')
            turimVarda = true;
    } else {
        alert('Bandyk dark kart.');
    }
    } else {
        alert('bandyk dar kart.');
    }
*/
    
function sumOfCubes(a, b) {
    return a * a * a * b * b * b;
}

let mySum = sumOfCubes(4, 9);
console.log(mySum);

document.getElementById("heading").innerText = "Labas";
document.getElementById("new text").innerHTML = "<h3>Sveiki visi</h3>";

function showMore() {
    document.getElementById("daugiau").innerHTML = "bronius kazma mazaja raide";
}

let studentai = ["Algis", "Alex", "Audrius", "Laurynas"];
for(let i = 0; i < studentai.length; i++) {
    if(i % 2 == 0) {
        console.log(studentai[i]);
    }
    
}

console.log(studentai[2]);
studentai[2] = "Tomas";
console.log(studentai[2]);
studentai.pop("Algis");
console.log(studentai);
studentai.push("Lukas");
console.log(studentai);

let pienoProduktai = ["pienas", "kefyras", "suris"];
let kitiProduktai = ["sausainiai", "kruops", "alus"];
let produktai = [pienoProduktai, kitiProduktai];
console.log(produktai);
console.log(produktai[1][1]);

let numberList = [2,3,5,8,4,7,6,9,1,12];
let lyginiuKiekis = 0;
for(let i = 0; i < numberList.length; i++) {
    if(numberList[i] % 2 ==0) {
        lyginiuKiekis++;
    } else {
        numberList[i] = undefined;
    }
}

console.log(lyginiuKiekis);
console.log(numberList)