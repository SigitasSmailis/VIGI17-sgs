//   ---------------    13 pask 1 uzduotis callback  ---  

function alertName(text) {
    alert(text)
}
function consoleName(text) {
   console.log(text)
}
function coreFunction(name, callback) {
    const capitalizedName = name.charAt().toUpperCase() + name.slice(1).toLowerCase();
    callback(capitalizedName)
}
coreFunction('petrAS', alertName);


//   ---------------    13 pask 1 uzduotis Array metodai  --- 

const cars = ["BMW", "VW", "Audi"];
cars.forEach((v) => console.log(v));

//   ---------------    13 pask 2 uzduotis Array metodai  ---

const cars2 = ["BMW", "VW", "Audi"];
cars2.forEach((v, index) => console.log(v +' ' + index));

//   ---------------    13 pask 3 uzduotis Array metodai  ---

const names = ["tim", "KIm", "AlicE", 'petER']
const newNames = names.map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLocaleLowerCase());
console.log(newNames);

