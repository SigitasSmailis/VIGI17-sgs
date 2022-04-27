// ---- 5 paskaita  EVENT  UZDUOTIS   1 ----------
// document.querySelector(' 2task').addEventListener('click', alert)
// function alert(){
//   alert('tim')
//  }
// myNam('tim')


// function namE(){
//     alert('sigitas')
// }

// ---- EVENT  UZDUOTIS   2 ----------

document.querySelector('button').addEventListener('click', namE );
function namE(){
    alert('sigitas')
}

// ---- EVENT  UZDUOTIS   3 ----------

document.querySelector('.task3').addEventListener('click',aboutMe)
  function aboutMe(){
    document.querySelector('h3').textContent = 'Me ME ME oja'
  }

//  document.querySelector('.task3').addEventListener('click', about);
//  function about(){
//   document.querySelector('h2').textContent  = 'my name is my name is'
// }
// ---- EVENT  UZDUOTIS   4 ----------


document.querySelector('#task41 ').addEventListener('click', plusOne)
function plusOne(){
   document.querySelector('h1 ').textContent ++ ;
  }

// ---- EVENT  UZDUOTIS   5 ----------

document.querySelector('.text').addEventListener('copy', ojj)
function ojj(){
  alert('kodel daba kopijuoji')
}
// document.querySelector('.about').addEventListener('copy', about);
// function about(){
//   alert('kodel kopijuoji')
// }

// ---- 5 paskaita  EVENT   6  UZDUOTIS  ----------
document.getElementById('task61').addEventListener('click', rand1);
function rand1(){
document.querySelector('h6').textContent = Math.floor(Math.random()*100)+1;
}


// ---- 5 paskaita  EVENT  UZDUOTIS   7   ----------

document.getElementById('task7y').addEventListener('click', alus);
function alus(){
  document.querySelector('.task7').textContent = 'Alus tau'
 }
  document.getElementById('task7n').addEventListener('click', alusNe);
function alusNe(){
  document.querySelector('.task7').textContent = 'metu per mazai, nebus alaus'
}

// document.getElementById('task7y').addEventListener('click', goodCl)
// function goodCl(){
// document.querySelector('h1').textContent = 'Alus'
// }
// document.querySelector('task7n').addEventListener('click', badCl)
// function badCl(){
//   alert('Nepilnametis nieko neturim');
// }

// ---- 5 paskaita EVENT  UZDUOTIS   8   ----------

function rand8 (){
  return Math.floor(Math.random()*3)+1
}
let random3 = rand8()
console.log(random3)

document.getElementById('first').addEventListener('click', () => random3 ===1 ? alert('ye'): alert('nai'))
document.getElementById('second').addEventListener('click', () => random3 ===2 ? alert('ye'): alert('nai'))
document.getElementById('third').addEventListener('click', () => random3 ===3 ? alert('ye'): alert('nai'))

// function randomNO (s1){
//   return Math.floor(Math.random() * s1) + 1
// }

// document.getElementById('first').addEventListener('click', onclick);
// function onclick(){
//    if (randomNO(3) === 1){
//    alert('YAY')
//   } else {
//     alert('NEY')
// }
// }
// document.getElementById('second').addEventListener('click', onclick);
// function onclick(){
//   if (randomNO(3) === 2){
//     alert('YAY')
//   } else {
//     alert('NEY')
//   }
// } 
// document.getElementById('third').addEventListener('click', onclick);
// function onclick(){
//   const random = randomNO(3)
//   if (random === 3){
//     alert('YAY')
//   } else {
//     alert('NEY skaicius buvo ', + random);
//   }
// } 
// ---- 5 paskaita EVENT  UZDUOTIS   9   ----------

const buttons = document.querySelector('body').querySelectorAll('button');
for (let button of buttons){
console.log(button)
button.addEventListener('click', task9);
}
function task9(){
document.querySelector('.task9n').textContent = 'NEKLAUSOTE MANES !!!!'
}
// kitas variantas su index padarome array ir renkame buttons
// .length rodo kiek yr elementu masyve
for(let index = 0; index < buttons.length; index ++)
console.log(index)
console.log(buttons[index])
buttons[index].addEventListener('click', task9);

// ----5 paskaita EVENT  UZDUOTIS   10   ----------

document.querySelector('.task10').addEventListener('mousemove', mouesMo)
function mouesMo(){
  document.querySelector('.task10').textContent = 'KODEL NEKLAUSOTE'
}
// document.querySelector('.task10').addEventListener('mousemove', moveMouse)
// function moveMouse (){
//   alert('Kiek galime neklausyti')
// }
