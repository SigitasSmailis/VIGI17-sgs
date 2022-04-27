
//    ---- 9 paskaita  Style JS   --  1 uzduotis   ------

document.querySelector('h1').addEventListener('click', (event) => {

    event.target.style.textAlign = 'center';
    event.target.style.color = 'red';
    event.target.style.fontSize = '4rem';
    
    // one line variantas
    // event.target.style.cssText = 'color: red;font-size: 4rem; text-align: center';
    
    });




// ---  9 paskaita  2 uzduotis  koreguoti dom   ----  
// let count = 0;
// document.querySelector('button').addEventListener('click', (event) =>{
// count++;
// event.target.style = '';
// // numusa visus stilius  .style = ''

// event.target.style.position = 'absolute';
// if (count % 2 === 0){
//     event.target.style.top = '1rem';
//     event.target.style.left = '1rem';
//   } else {
//     event.target.style.bottom = '1rem';
//     event.target.style.right = '1rem';
// }
// })

// kitas variantas

// document.querySelector('button').addEventListener('click', (event) =>{
// let btnE1 = event.target;
//    if (btnE1.className ==='btn-left'){
//     btnE1.className ='btn-right'
//    } else if ( btnE1.className ==='btn-right'){
//     btnE1.className ='btn-left'
//    } else {btnE1.className ='btn-left'}
// })
// --- 9 paskaita   3 uzduotis  koreguoti dom   ---- 

// let count = 0;
// document.querySelector('button').addEventListener('click', (event) =>{
// count++;
// event.target.style = '';
// // numusa visus stilius  .style = ''

// event.target.style.position = 'absolute';
// if (count % 2 === 0){
//     event.target.style.top = '1rem';
//     event.target.style.left = '0.5rem';
//   } else  {
//     event.target.style.top = '1rem';
//     event.target.style.right = '1rem';
// } else  {
//     event.target.style.bottom = '1rem';
//     event.target.style.right = '1rem';
// }  else  {
//     event.target.style.bottom = '1rem';
//     event.target.style.left = '1rem';
// }
// else  {
//         event.target.style.top = '1rem';
//         event.target.style.center = '1rem';
// }})




// document.querySelector('button').addEventListener('click', (event) =>{
//     let btnE1 = event.target;
//        if (btnE1.className ==='btn-left'){
//         btnE1.className ='btn-right'
//        } else if ( btnE1.className ==='btn-right'){
//         btnE1.className ='btn-left'
//        } else {btnE1.className ='btn-left'}
//     })

//   --- 9 paskaita   4 uzduotis  koreguoti dom   ----  

document.getElementById('name').addEventListener('input', (event) => {
    //  console.log(event.target.value);
    if (event.target.value.length <= 3){
        document.body.style.backgroundColor = 'red'}
        else if (event.target.value.length > 5){
            document.body.style.backgroundColor = 'green'}
            else {
                document.body.style.backgroundColor = 'yellow'}   })
//  console.log(document.getElementById('name').value);

//   --- 9 paskaita   5 uzduotis  koreguoti dom   ----  
const buttonCol = ["red", "green", "blue", "yellow"]
document.getElementById('butt5').addEventListener('click', (event) => {
const randIndex = Math.round(Math.random()*4)
event.target.style.backgroundColor = ["red", "green", "blue", "yellow"][randIndex]
event.target.style.margin = '1rem'
})
//   --- 9 paskaita   6 uzduotis  koreguoti dom   ---- 

function generateRandCol () {
    const randBetw = (min, max) => min+ Math.floor(Math.random()*(max- min +1))
const r = randBetw(0, 255)
const g = randBetw(0, 255)
const b = randBetw(0, 255)
return' rgb (${r},${g},${b} )'

// kabutes neina rgb
}
document.getElementById('butt6').addEventListener('click', (event) => {
event.target.style.backgroundColor = generateRandCol();
})
