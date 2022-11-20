//const fetchPokemon = () => //Ya que esta función tarda porque es un API REST en otro server, es recomendable usar una función async
const fetchPokemon = async () => 
{
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    //fetch(url).then((res) => { //Ya que esta función tarda porque es un API REST en otro server, es recomendable usar una función async
    let data = await fetch(url).then((res) => { 
        if (res.status != "200") {
            console.log(res);
            pokeImage("./SadPokemon.gif")
        }
        else {
            return res.json();
        }
    })//.then((data) => {//Ya que se usa un async await ya no se necesita esta parte
        // if (data) {
        //     console.log(data);
        //     let pokeImg = data.sprites.front_default;
        //     pokeImage(pokeImg);
        //     console.log(pokeImg);
        // } //Ya que esta función tarda porque es un API REST en otro server, es recomendable usar una función async con su await, por lo que ya no es necesaria esta parte aquí...
    //});
    if (data) {
        console.log("data",data);
        let pokeImg = data.sprites.front_shiny;
        let pokeInfo = data.abilities;
        pokeImage(pokeImg);
        pokeData(pokeInfo);
        console.log("pokeImg",pokeImg);
        console.log("pokeInfo",pokeInfo);
    }
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData = (abilities) => {
    const pokeAbilities = document.getElementById("abilities"); 

    const abilitiesName = abilities.map((item) => item.ability.name);
    console.log("abilities full", abilities);
    console.log("abilities names ",abilitiesName); 
    pokeAbilities.innerHTML=abilitiesName;
}
