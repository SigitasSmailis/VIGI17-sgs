var casual = require('casual');

console.log('labas rytas')



// console.log(casual.name_suffix, casual.name, casual.username);

let city = casual.city;
console.log(city);

let randomNumber = Math.floor((Math.random() * 10) + 1);
console.log(city, randomNumber);

casual.define('user', function() {
    return {
        suffix: casual.name_suffix,
        firstname: casual.first_name,
        lastname: casual.last_name,
    };
});
//  tokiais skliaustais bus array

const getName = (name, lastname) => {
    return `${casual.name_suffix} ${casual.name} ${casual.username}`
}

let user = casual.user;
console.log(user);
console.log(casual.name)

console.log(casual.name_suffix, casual.name, casual.username);

console.log(`${casual.name_suffix} ${casual.name} ${casual.username}`);
