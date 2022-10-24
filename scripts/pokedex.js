$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search)
    const gen = parseInt(urlParams.get('gen'))
    let lastPokemon = 1;
    let firstPokemon = 1;
   switch(gen){
      case 1:
        firstPokemon = 1;
        lastPokemon = 151;
        break;
      case 2:
        firstPokemon = 152;
        lastPokemon = 251;
        break;
      case 3:
        firstPokemon = 252
        lastPokemon = 387;
        break;
      case 4:
        firstPokemon = 388;
        lastPokemon = 494;
        break;
      case 5:
        firstPokemon = 495;
        lastPokemon = 649;
        break;
   }
  for (let i = firstPokemon; i <= lastPokemon; i++) {
    fetch('https://pokeapi.co/api/v2/pokemon-species/' + i)
      .then((response) => response.json())
      .then((data) => {
        let pokemonName = data.names[6].name;
        let pokemonDescription =
          data.flavor_text_entries[4].flavor_text;

        let gen;
        switch (true) {
          case i <= 151:
            gen = 1;
            if (i === 1) {
              $('#pokedex-1').before(`<h3>Generation I</h3>`);
            }
            break;
          case i > 151 && i <= 251:
            gen = 2;
            if (i === 152) {
              $('#pokedex-2').before(`<h3>Generation II</h3>`);
            }
            break;
          case i > 251 && i <= 387:
            gen = 3;
            if (i === 252) {
              $('#pokedex-3').before(`<h3>Generation III</h3>`);
            }
            break;
          case i > 387 && i <= 494:
            gen = 4;
            if (i === 388) {
              $('#pokedex-4').before(`<h3>Generation IV</h3>`);
            }
            break;
          case i > 494 && i <= 649:
            gen = 5;
            if (i === 495) {
              $('#pokedex-5').before(`<h3>Generation V</h3>`);
            }
            break;
        }

        $(`.pokedex-container-${gen}`)
          .append(`<div class="d-flex justify-content-center col-lg-3 col-md-4 col-sm-6 mb-2" id="searchIndex${i}" data-aos="fade-up" data-aos-duration="1000"><div class="card"  style="width: 18rem;">
     <img id="searchIndex${data.names[6].name.toLowerCase()}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg" loading="lazy" class="card-img-top" alt="...">
     <div class="card-body text-center" id="card-body${i}">
     <h6>#${000 + i}</h6>
     <h5 class="card-title">${pokemonName}</h5>
     <div id="types${i}" class="mb-2"></div>
     <p class="card-text">${pokemonDescription.replace('\f', '')}</p>
     
   </div>
   <a href="pokemon.html?id=${i}" class="btn btn-primary mx-5" align="center">View Stats</a>
 </div></div>`);
      })
      .catch((e) => {
        console.log(e.message);
      });
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((response) => response.json())
      .then((data) => {
        for (let type of data.types) {
          let element = type.type.name;
          let backGround = '#A8A77A';
          switch (element) {
            case 'fire':
              backGround = '#EE8130';
              break;
            case 'water':
              backGround = '#6390F0';
              break;
            case 'electric':
              backGround = '#F7D02C';
              break;
            case 'grass':
              backGround = '#7AC74C';
              break;
            case 'ice':
              backGround = '#96D9D6';
              break;
            case 'fighting':
              backGround = '#C22E28';
              break;
            case 'poison':
              backGround = '#A33EA1';
              break;
            case 'ground':
              backGround = '#E2BF65';
              break;
            case 'flying':
              backGround = '#A98FF3';
              break;
            case 'psychic':
              backGround = '#F95587';
              break;
            case 'bug':
              backGround = '#A6B91A';
              break;
            case 'rock':
              backGround = '#B6A136';
              break;
            case 'ghost':
              backGround = '#735797';
              break;
            case 'dragon':
              backGround = '#6F35FC';
              break;
            case 'dark':
              backGround = '#705746';
              break;
            case 'steel':
              backGround = '#B7B7CE';
              break;
            case 'fairy':
              backGround = '#D685AD';
              break;
            default:
              backGround = '#A8A77A';
              break;
          }
          $(`#types${i}`).append(
            `<button class="btn mx-1" style="background-color: ${backGround}">${element}</button>`
          );
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }
});
