//    -----    PETRO PASKAITA   --------- 
// document.querySelector('form').addEventListener('submit', myFunct);

// function myFunct (event){
//     event.preventDefault();
//     // console.log(document.querySelector('input[name=name]').value)
//     // console.log(event.target.elements.name.value)
//     const funct = document.querySelector('input[name=name]').value
//     document.querySelector('h2').textContent = funct
// }
//    -----    Vidmanto PASKAITA   ---------
// ----------------------------------------------------------

// document.querySelector('form').addEventListener('submit', onSubmit)
// function onSubmit(event){
//     event.preventDefault();
//     console.log(event);
//     console.log(event.target);
//     const userNameIn = event.target.querySelector('input[name="username"]');
//     const userPaswIn = event.target.querySelector('input[name="password"]');
//     console.log(userNameIn.value, userPaswIn.value);


//     // console.log(event.target === document.querySelector('form'))

//     console.log('first')
// }
// ----------------- ------------ --------------------- ------------
document.querySelector('form').addEventListener('submit', onSubm)
function onSubm (event){
    event.preventDefault();
    const headingEl = document.querySelector('h1')
    console.log(event);
    //  + pries event pavercia stringa i skaiciu
const numbIn = Number(event.target.querySelector('input[name="number"]').value);
const numb2In = +event.target.querySelector('input[name="number2"]').value;

const radioBut = event.target.querySelectorAll('input[name="radio"]')
let radioID;
for (radio of radioBut){
    if (radio.checked) {
        console.log(radio)
        radioID = radio.id
    }
}
switch(radioID){
case 'sum':
    headingEl.textContent ='atsakymas ' +( numbIn + numb2In);
    break;
    case 'sub':
     headingEl.textContent ='atsakymas ' +( numbIn - numb2In);
    break;
    case 'div':
     headingEl.textContent ='atsakymas ' + numbIn / numb2In;
     break;
    case 'multi':
     headingEl.textContent ='atsakymas ' + numbIn * numb2In;
     break;
default:
    headingEl.textContent = 'napasirinktas veiksmas'
}

// console.log(radioBut[0].checked);

// pasitikrinam ar teisinga reiksme
// console.log(radioBut[0].checked);


 }

