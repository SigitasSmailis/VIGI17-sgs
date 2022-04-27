//    ----   20 PASK JS promise   1 uzduotis -- - 
// const manau =  new Promise ((resolve, reject) => {resolve(),2000})

// manau.then(() => alert('veikia'))

// console.log('sync kodas pasileis pirmas, asyncroninis kodas eis po synchroninio')



// let spejau = setTimeout(() => {alert('yes veikia')}, 5000)
// console.log('pamanyk skaicuoti reikia')


//    ----   20 PASK JS promise   2 uzduotis -- - 

const pazadu =  new Promise ((resolve, reject) => {
    const random= Math.floor(Math.random()*5) + 1;
    console.log(random)
setTimeout(() => {
    if(random === 1){
        reject();
    }
    else{
        resolve();
    }
})    ,2000})



pazadu
.then(() => alert('veikia'))
.catch(() => alert('oj pazadas buvo atmestas'))
