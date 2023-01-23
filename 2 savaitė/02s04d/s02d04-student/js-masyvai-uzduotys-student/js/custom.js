/*
1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
*/

var masyvas = [];
var x = 0;
for (i=0; i<30; i++) {
    x = Math.floor(Math.random() * (25 - 5 + 1) + 5);
    masyvas.push(x);
}

console.log(masyvas)

/*
2. Naudodamiesi 1 uždavinio masyvu:
- Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
- Raskite didžiausią masyvo reikšmę;
- Suskaičiuokite visų reikšmių sumą;
- Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
- Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
- Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;
- Masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
- Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
*/

var b = masyvas.filter(Number => Number > 10).length;
var c = Math.max.apply(x, masyvas);


var suma = 0;
for(let i = 0; i < masyvas.length; i++) {
    suma += masyvas[i];
}

var masyvasmin = []
for(i = 0; i < masyvas.length; i++) {
    masyvasmin.push(masyvas[i] - i);
}
console.log(masyvasmin.join())

var masyvasplus = [];
var gigamasyvas = [];
var xp = 0;
for (i=0; i<10; i++) {
    xp = Math.floor(Math.random() * (25 - 5 + 1) + 5);
    masyvasplus.push(xp);
}

var gigamasyvas = masyvas.concat(masyvasplus)
console.log(gigamasyvas);

var masyvas = [];
var masyvaseven = [];
var xe = 0;
for(i = 0; i < masyvas.length; i++) {
    if(xe % 2 === 0)
    masyvaseven.push(xe);
}

//var masyvas = [];
//var x = 0;
//for(i=0; i < masyvas.length; i++) {
    //if(x % 2 === 0) {  
        //}else {
        //    masyvaseven.push(x);
        //}
//}
//console.log(masyvaseven)


//var mazindex = masyvas.min(x < 10);
//console.log(mazindex)


console.log('pirmas- ' + b + ' ; antras- ' + c + ' ; trečias- ' + suma + ' ; ketvirtas- '+ masyvasmin.join() + "; penktas- " + gigamasyvas + " ; šeštas- " +  + " ; septintas- " )

/*
3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
*/

var raides = new Array(200).fill(0).map(_ => Math.floor(Math.random() * 4 + 1))

raides.forEach((element, index) => {
    if (element === 1) {
        raides[index] = 'A';
    }
});
raides.forEach((element, index) => {
    if (element === 2) {
        raides[index] = 'B';
    }
});
raides.forEach((element, index) => {
    if (element === 3) {
        raides[index] = 'C';
    }
});
raides.forEach((element, index) => {
    if (element === 4) {
        raides[index] = 'D';
    }
});

var araides = raides.filter(element => element === 'A');
var braides = raides.filter(element => element === 'B');
var craides = raides.filter(element => element === 'C');
var draides = raides.filter(element => element === 'D');
console.log(raides)
console.log(araides, braides, craides, draides)

/*
4. Išrūšiuokite 3 uždavinio masyvą pagal abecėlę.
*/

let isrusiuota = raides.sort()
console.log(isrusiuota)
/*
5. Sugeneruokite masyvą, kurio reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvo ilgis 100. Masyvo reikšmės turi būti unikalios (t.y. neturi kartotis).
*/



