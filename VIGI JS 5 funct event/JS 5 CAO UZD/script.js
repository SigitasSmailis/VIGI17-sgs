// ---- 5 pask  1 UZDUOTIS  funkcija  ----------
function myNam(name){
   console.log(name)
    }
myNam('kim')
myNam('tim')
    // function myName(name){
    //     alert(name)
    // }
    // myName('Leo');
    // myName('Kim');
    // myName('jon');

// ---- 5 pask  2 UZDUOTIS  funkcija    ----------
// r ne visos funkcijos turi parametrus - sukurkite funkciją, 
// kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

function randomN(r){
    let random=Math.floor(Math.random()*r)+1
    return random
}
console.log(randomN(5))

// function randomN (f2){
// let random = Math.random() * f2;

//  random = Math.floor(random +1)
// return random;
// }

// console.log (randomN (5))

// ---- 5 pask  3 UZDUOTIS  funkcija   ----------
// Sukurkite funkciją, kuri paims du parametrus - 
// vardą ir pavardę - ir grąžins sumą šių žodžių 
// ilgių (t.y. "Petras", "Slekys" => 12).

function dataLength(nm,srn){
    return nm.length + srn.length;
}
console.log(dataLength('leonard','gone'))


// function nameSurname(v1, p1){
//     return v1.length + p1.length
// }

// console.log(nameSurname('Sigitas', 'Smailis'))
// document.body.textContent = nameSurname('Sigitas', 'Smailis')

// ---- 5 pask   UZDUOTIS 4  funkcija    ----------
// Sukurkite funkciją, kuri pagal paduotą skaičių 
// grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C
//  ir t.t.). Hint: Jums reikės pirma sukurti Array 
//  su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija 
//  paims pagal indeksą atitinkamą raidę. Jei primiršot array - pasižiūrėkite

function getLetter(index){
const letters= [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
return letters[index]
}
console.log(getLetter(16))

// function getLetter(array, index) {
//    if (index > array.length) {
//        return 'nera tokio elemento'
//    }
//     return array[index-1]
// }
// console.log (getLetter(letters, 8));

// ---- 5 pask   UZDUOTIS 5  funkcija   ----------
// Sukurkite funkciją, kuri paims tris parametrus 
// (n1, n2, operator). Operator gali būti "sum", "sub",
//  "div", "multi" (matematinės reikšmės - sudėti, atimti,
//  padalinti, padauginti). n1 ir n2 bus skaičiai. Turite 
// grąžinti atsakymą, kur n1 ir n2 atlikta matematinė
//  operacija (pvz.: 5, 1, "sub" => 4; 6, 3,"sum" => 9...).
//  Hint: Reikės funkcijoje naudotiif-else arba switch.

function arithmet(n1,n2,operator){
    switch (operator){
        case 'sum':
        return n1+n2
        break;
        case 'sub':
    }
}


// function calcN (n1, n2, operator){
//     if (operator === 'sum'){
//         return n1 + n2
//     } else if ( operator === 'sub'){
//          return n1 - n2}
//      else if ( operator === 'div'){
//           return n1 / n2}
//       else if ( operator === 'multi'){
//           return n1 * n2}
//           else {
//               return 'tokio operatoriaus nera'
//           }
// }
// console.log(calcN(5,4,'multi'))

// function calcNumber(n1,n2,operator){
// switch (operator){
//     case 'sum':
//         return n1 + n2;
//     case 'sub':
//          return n1 - n2;
//     case 'div':
//         return n1 / n2;    
//     case 'multi':
//         return n1 * n2;  
//     default:
//             return 'tokio operta nera'
// }
// }
// console.log(calcNumber(66, 2, 'div'))

// ---- 6 UZDUOTIS    ----------
function gerateRN(c1){
    return Math.floor(Math.random() * c1) + 1 ;
}
 function square(c1) {
    return c1 * c1;
 }
  console.log(gerateRN(8))
 console.log(square(gerateRN(8)))

