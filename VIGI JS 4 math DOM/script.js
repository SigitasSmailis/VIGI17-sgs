let i=1
while (i<6){
    console.log(i)
    i++
}

let ni=3
do {
    console.log(ni)
    ni++}
while(ni<5)

const random =Math.floor( Math.random() *10) +1;
console.log(random)







console.log(Math.max(1,5,9,13,51,88,99,123))
console.log(Math.min(2,9,13,51,88,99,123))

//   --  DOM   -  
console.log(document)
document.body


console.log('MOKAUSI');
window.alert('test');
console.log(document);
console.log(document.body);

console.log(document.querySelector('h1'))
console.log(document.querySelector('.tas'))
console.log(document.querySelectorAll('h1'))
console.log(document.querySelector('#itas'))

//   get element by Id
console.log(document.getElementById('itas'))

const myText= document.querySelector('h1');
console.log(myText.textContent);
myText.textContent = "kuriam nauja teksta"
console.log(myText.textContent);

document.querySelector('h1').textContent = 'kodel taip reikia'

document.querySelector('p').textContent = 'skaneles karcio, vaisiukai saldus'

document.querySelector('h2').innerHTML = '<h5>keiciame</h5>'