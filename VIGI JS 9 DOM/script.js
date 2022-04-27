//   --  petro paskaita  ------
const title = document.querySelector('h2');
title.style.fontSize = 'big'
title.style.color = 'blue'
title.style.background = 'yellow'
title.style.width = '50%'
title.style.padding = '1rem 1rem'
title.style.borderRadius = '0.5rem'

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('h2').style.background = 'orange'
})



//    ----  Style JS   --  1 uzduotis   ------



title('h1').addEventListener('clik', (event) => {

// event.target.style.textAlign = 'center';
// event.target.style.color = 'red';
// event.target.style.fontSize = '4rem';

event.target.style.cssText = 'color: red;font-size: 4rem; text-align: center';

});