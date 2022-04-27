//   ----   bolean   -----  

const name = 'CodeAcademy'
const boolean = true
console.log(boolean.toString())

//   ----   number   -----  

const number = 2;
console.log(number.toString())

// isveda skaiciu paversta i dvejetaine sistema (radix)
                console.log(number.toString(2))

console.log( number.toFixed())
// apvalina arba parodo kiek skaiciu po kablelio
console.log( number.toFixed(4));

    console.log( number.valueOf());
    //apvalina paskutini skaiciu 
    console.log( number.toPrecision(4));
    console.log( number.toExponential(2));

//   ----   string   ----- 

let string = 'CodeAcademy';
// randa raide stringe
console.log(string.charAt(3))
// prasideda nuo nulio

console.log(string.length)

// sudeda stringus
console.log(string.concat(' As esu'))
console.log(string + ' Lietuva ' +5)

console.log(string.endsWith('demy'))
// if (string.endsWith('demy')) {
//  alert ('baigiasi zodziu') }

console.log(string.startsWith('C'))

console.log(string.includes('dem'));
let email = 'bob@gamil.com';
console.log(string.includes('@'));
if (!email.includes('@') || !email.includes('.com'))
alert ('bad email');


console.log(string.indexOf('h'))


console.log(string.repeat(2));
console.log(string.replace('Code', 'Test '))
console.log(string.replace(' ', '-'));
console.log(string.replaceAll(' ', '-'));
console.log(string.search('emy'));
console.log(string.toLowerCase());
console.log(string.toUpperCase());

console.log(string.trimEnd());
console.log(string.trimStart());
console.log(string.trim());

console.log(string.charAt(7).toLocaleUpperCase());

//     ----- slice  -------
console.log(string.slice(0, 8))
//   - ima nuo galo
console.log(string.slice(0, -7))
console.log(string.slice(-3))

 console.log(string.slice(6, 4));  // antras parametras didesnis uz pirma  

console.log(string.substring(6,4));  

//     ----- split  -------

console.log(string.split())
console.log(string.split(''))
console.log(string.split('e'))

const string3 = 'Code Academy Vilnius'
console.log(string3.split(' '));
console.log(string3.split(' ').join('/'))


const string4 = 'vidmantas'
console.log(string4.charAt(0).toLocaleUpperCase() + string4.slice(1))
const string5 = 'vidMaTtas'
console.log(string4.charAt(0).toLocaleUpperCase() + string4.slice(1))
