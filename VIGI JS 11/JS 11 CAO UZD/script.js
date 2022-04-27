// ------   1 Uzduotis    ---    

// const lower = document.createElement('h1');
// lower.textContent = 'shitas';
// lower.style.color = 'orange'
// document.body.append(lower);

// const lower1 = document.createElement('h3');
// lower1.textContent = 'anas';
// document.body.append(lower1);


// ------   2 Uzduotis    ---    

// const car = document.createElement('ul')
// car.textContent = 'auto list';
// car.style.textAlign = 'center';
// car.style.height = '2rem';
// document.body.append(car)
// let list = document.createElement('li');
// list.textContent = 'audi';
// list.style.background = 'yellow'
// document.body.append(list)
// let list2 = document.createElement('li');
// list2.textContent = 'opel';
// list2.style.background = 'lightgreen'
// document.body.append(list2)
// let list3 = document.createElement('li');
// list3.textContent = 'mazda';
// list3.style.background = 'red'
// list3.style.marginLeft = '3rem'
// list2.style.marginLeft = '2rem'
// document.body.append(list3)

// ------   3 Uzduotis    -----

document.body.style.background = 'lightgray';

//    main block
const main = document.createElement('main');

main.style.background = 'white';
main.style.borderRadius = '0.5rem';
main.style.margin = '5rem auto';
main.style.width = '70%';
main.style.padding = '1rem';
main.style.textAlign = 'center'

document.body.append(main)
//  img  
const img = document.createElement('img');
img.src = "https://www.publicdomainpictures.net/pictures/80000/t2/we-can-do-it-poster.jpg"
img.style.width = '10rem'
img.style.borderRadius = '40%'
img.style.marginTop = '-4rem'
main.append(img)

//  text

const name = document.createElement('h2');
name.textContent = 'Stipri'
main.append(name);

//  text

const contacts = document.createElement('h5');
contacts.textContent = 'Surask manei';
contacts.style.color = 'grey'
main.append(contacts);
const contacts2 = document.createElement('h5');
contacts2.textContent = 'siūsk pašto balandelį';
contacts2.style.color = 'grey'
main.append(contacts2);