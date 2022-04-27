
import {getPokemon} from './src/api/requests.js';
import { displayPokemons } from './src/utils.js';


document.addEventListener ('DOMContentLoaded', async ()=>{
    const pokemons = await getPokemon();
  displayPokemons(pokemons.results) 
})

// vieks taip pat kaip ir per DOOMContent
// const main = async() => {
//     const pokemons = await getPokemon();
//     displayPokemons(pokemons.results) 
// }


//  ES5 stadartas
// getPokemon().then((pokemons) => {
//     displayPokemons(pokemons.results)
// })