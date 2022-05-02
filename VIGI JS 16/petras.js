// const person = {
//     name: 'tim',
//     surname: 'kim'
// }


//  klases is didziosios raides

function Person (n, s, a){
this.name = n
this.surname = s
this.age = a
this.introduce = function (){
    alert('labas as' + this.name)
}
}
const jis = new Person('joe', 'bok', 22)
// console.log(jis)
console.log(jis.introduce())