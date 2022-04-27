const getPokemon = async () =>{
    try {
        const response = await fetch(
           ' https://pokeapi.co/api/v2/ability/?limit=10'
        )
        const data = await response.json()
        return data
    } catch (err){
        console.log(err)
    }
}
export {getPokemon}