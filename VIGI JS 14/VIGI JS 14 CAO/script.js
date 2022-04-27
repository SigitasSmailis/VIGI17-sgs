//    ----   14 PASK Sort   1 uzduotis -- -   
let names = ['piit', 'jhon', 'kate', 'bob', 'stasy'];
// names.sort((a,b) => a.length - b.length);

names.sort();
console.log(names)

//    ----   14 PASK Sort   2 uzduotis -- - 
names.sort((a,b) => b-a);
console.log(names)

//    ----   14 PASK Sort   3 uzduotis -- - 

const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];

numbers.sort((a,b) => b - a);
console.log(numbers);

//    ----   14 PASK Sort   3 uzduotis -- - 

const bigestNumber = [10, 5, 20, 4];
bigestNumber.sort((a,b) => b-a )
console.log(bigestNumber)
console.log(bigestNumber[0] )
bigestNumber.sort((a,b) => a-b )
console.log(bigestNumber)
console.log(bigestNumber[3] )


