const func = function () {
    console.log('code')
};
func()

function func2() {
    console.log('code2')
}
// func2();

// anonymuos function
const func3=() =>{
    console.log('code3')
}
func3()


//  tai yra ES5 stanartas
document.addEventListener('click', function() {
    console.log('code2')
});
//  tai yra ES6 stanartas  --- aroow function
document.addEventListener('click', () => {
    console.log('code2 es6')
});

//  ES6 standartas su priskirtu pavadinimu
const func4 = () => {
    console.log('first')
};

// ES5 standartas funkcija su pavadinimu be arrow funkcijos
function func4() {}

// yra 2 tipu funkcijos su pavadinimu ir be pavadinimo (anonymuous)
// su return ir be jo

