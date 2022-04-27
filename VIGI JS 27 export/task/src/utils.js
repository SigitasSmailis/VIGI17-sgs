const createElement = (type, text) => {
    const el = document.createElement(type);
    if (text) el.textContent = text;
    return el

}

export const displayPokemons = (array) => {
    array.forEach((pokemon) => {
        const output = document.getElementById('output')
        const div = document.createElement ('div')
        const heading = document.createElement('h2', pokemon.name)
        const url = createElement('p',pokemon.url )
      
        div.append(heading, url);
        output.append(div);
    });
};

