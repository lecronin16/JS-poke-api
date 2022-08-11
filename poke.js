
const getPoke = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json() 
    const pokeName = data['forms'][0]['name']
    const pokeImg = data['sprites']['front_default']
    const pokeHP = data['stats'][0]['base_stat']
    const pokeAtt = data['stats'][1]['base_stat']
    const pokeDef = data['stats'][2]['base_stat']
    const pokes = [pokeName, pokeImg, pokeHP, pokeAtt, pokeDef]

    addToPage(pokes)
    return pokes
};

const pokeform = document.querySelector('#get_pokemon')

pokeform.addEventListener('submit', (e) =>{
    e.preventDefault();
    const pokemon = e.path[0][0].value
    const pokeInfo = getPoke(pokemon)
    console.log(pokemon)
    return
})

const addToPage = (pokedata) => {
    const p = document.createElement('p')
    p.innerHTML = 
`    <div class="card" style="width: 18rem;">
            <img src="${pokedata[1]}" class="card-img-top" >
            <div class="card-body">
                <h5 class="card-title">${pokedata[0]}</h5>
                <h6 class="card-title"> HP: ${pokedata[2]}</h6>
                <h6 class="card-title"> ATT: ${pokedata[3]}</h6>
                <h6 class="card-title"> DEFF: ${pokedata[4]}</h6>
            </div>
    </div>`
    document.querySelector('#show').append(p)
};



const clearBtn = document.getElementById('clear');
const clearPoke = () => {
    document.querySelector('section').innerHTML=''
};
clearBtn.addEventListener('click', clearPoke)
