// ----------- UZDUOTIS 1   while loop------
// Su while ciklu pasirašykite, kad jūsų vardą alertintų 3 kartus.

// let s = 0
// while (s<3){
//     alert('sigitas')
//     s++
// }

// --------- UZDUOTIS 2   while loop------
// 

// let combo = ' '
// let times = 5
// const namee = 'pyyt'

// do {combo += namee
// times --}
// while (times>0)
// console.log(combo)

const capit = 'nepadariau'
const answer = capit.toLocaleUpperCase()
console.log(answer)

// // --------- UZDUOTIS 1   Math ------

// let cos =  Math.cos(0)
// console.log(cos)


// // --------- UZDUOTIS 2   Math ------
// const random = Math.floor( Math.random(1)  *5) +1
// console.log(random)

// // --------- UZDUOTIS 3   Math ------
// const randoM = Math.floor( Math.random(5)  *12) +1;
// console.log(randoM)
// // --------- UZDUOTIS 4   Math ------

let randomm =Math.floor(Math.random()*5)+1;
if (randomm === 3){console.log('laimejo')}
else {
console.log('nelaimejo')}

// // --------- UZDUOTIS 1   DOM ------

// document.body.textContent='Sigitas'

 // --------- UZDUOTIS 2   DOM ------

document.getElementById('name').textContent = 'Steeve'

 // --------- UZDUOTIS 3   DOM ------

document.querySelector('li:last-child').textContent= 'surelis'

 // --------- UZDUOTIS 4   DOM ------

 document.querySelector('.bluetext span').textContent='blue'

  // --------- UZDUOTIS 5   DOM ------

//   const firstLiIt = document.querySelector('li:first-child');
//   const secondtLiIt = document.querySelector('li:nth-child(2)');

// const bmw_group = firstLiIt.textContent
// const vw_group = secondtLiIt.textContent

// firstLiIt.textContent = vw_group;
// secondtLiIt.textContent = bmw_group;


const orLi = document.querySelector('ol');
console.log(orLi)
const olItems = orLi.querySelectorAll('li');
console.log(olItems)

 const  firstLiIt = olItems[0].textContent;
const  secondtLiIt = olItems[2].textContent;
olItems[0].textContent= secondtLiIt
olItems[2].textContent= firstLiIt





let nam =  0
while (nam<3){
    console.log('sig')
    nam++
}

// let comb ='pyt'
// for (let times = 5; times<=5; comb++)
// {console.log( comb)}

let coss = Math.cos(0)
console.log(coss)

let rand= Math.floor(Math.random()*5 )+1
console.log(rand)

let rando= Math.floor(Math.random()*(12-5 +1)) +5

console.log(Math.floor(Math.random ()*8)+5);


console.log(rando)

// document.querySelector('p:first-child').textContent = 'ne tep'

document.querySelectorAll('p').textContent = 'nee tep'

// ==========================
// loterija 1 15 daiktu
const random = Math.floor(Math.random() * 15)+1
switch(random){
  case 12:
    console.log('auto')
    break
    case 1:
     case 2:
      case 3:
        console.log('telikas')
    break;
    case 4:
      case 5:
       case 6:
         console.log('2eur')
     break;
default:
  console.log('nelaimejai')
}
