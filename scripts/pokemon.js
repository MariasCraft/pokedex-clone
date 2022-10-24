$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search)
    const pokemonId = parseInt(urlParams.get('id'))
  



    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then((data) => {
            let statsId = pokemonId;
            switch(true){
                case pokemonId < 10:
                    statsId = `00${pokemonId}`;
                    break;
                case pokemonId >= 10 && pokemonId < 100:
                    statsId = `0${pokemonId}`;
                    break;
                default:
                    statsId = pokemonId
            }
            $('.poke-stats').prepend(`<h2 align="center" class="mt-4"><b>#</b> ${statsId}</h2>`)

            $('.pokemon-img').append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg"></img>`)
            $('#pokemon-name').append(data.name.charAt(0).toUpperCase() + data.name.slice(1))
            for (let item of data.types) {
                $('#pokemon-types').append(`<div class="col-6"><img class="pokemon-types" src="/Images/${item.type.name}.svg" title="${item.type.name}"></div>`)
            }
            for (let i = 0; i < data.stats.length; i++) {
                $('.basic-stats').append(`<li>${data.stats[i].stat.name}: ${data.stats[i].base_stat}</li>`)


            }


            $('.basic-stats').append(`<li>height: ${data.height}</li>`)


        }).catch((e) => {
            console.log(e.message)
        })
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
        .then((response) => response.json())
        .then((data) => {

            let pokemonDescription = data.flavor_text_entries[4].flavor_text
            $('.pokemon-description').append(`<p>${pokemonDescription.replace('\f', '')}</p>`)
            const evolutionUrl = data.evolution_chain.url
            fetch(evolutionUrl)
                .then((response) => response.json())
                .then((data) => {

                })
        }).catch((e) => {
            console.log(e.message)


        });
    // fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`)
    // .then((response)=>response.json())
    // .then((data)=>{
    //     console.log(data.chain.evolves_to)
    //    if(data.chain.evolves_to.length != 0){
    //     let evolve = data.chain.evolves_to
    //     let evolutionId = parseInt(pokemonId)
    //     let item = evolve[0]
    //     console.log(item)
    //         let evolvedName = item.species.name         
    //         $(`.pokemon-evolution`).append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${evolutionId}.svg">`)
    //         $(`.pokemon-evolution-name`).append(`<h3 align="center"><a href="pokemon.html?id=${evolutionId+1}"></a></h3>`)
    //     console.log(evolutionId)
    //    }
    // }).catch((e)=>{
    //     console.log(e.message)
    // })



    if (pokemonId > 1) {
        $('#nav-buttons').append(`<a href="pokemon.html?id=${pokemonId - 1}" class="btn btn-primary">Previous Pokemon</a>`)

    }
    if (pokemonId < 650) {
        $('#nav-buttons').append(`<a href="pokemon.html?id=${pokemonId + 1}" class="btn btn-primary">Next Pokemon</a>`)
    }


    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((response) => {
        return response.json();
    }).then((data) => {
        let element = data.types[0].type.name;
        console.log(element)
        let backGround = '#A8A77A';
        switch (element) {
            case 'fire':
                backGround = 'rgba(168, 167, 122, .7)';
                break;
            case 'water':
                backGround = 'rgba(99, 144, 240, .7)';
                break;
            case 'electric':
                backGround = 'rgba(247, 208, 44, .7)';
                break;
            case 'grass':
                backGround = 'rgba(122, 199, 76, .7)';
                break;
            case 'ice':
                backGround = 'rgba(150, 217, 214, .7)';
                break;
            case 'fighting':
                backGround = 'rgba(194, 46, 40, .7)';
                break;
            case 'poison':
                backGround = 'rgba(163, 62, 161, .7)';
                break;
            case 'ground':
                backGround = 'rgba(226, 191, 101, .7)';
                break;
            case 'flying':
                backGround = 'rgba(169, 143, 243, .7)';
                break;
            case 'psychic':
                backGround = 'rgba(249, 85, 135, .7)';
                break;
            case 'bug':
                backGround = 'rgba(166, 185, 26, .7)';
                break;
            case 'rock':
                backGround = 'rgba(182, 161, 54, .7)';
                break;
            case 'ghost':
                backGround = 'rgba(115, 87, 151, .7)';
                break;
            case 'dragon':
                backGround = 'rgba(111, 53, 252, .7)';
                break;
            case 'dark':
                backGround = 'rgba(112, 87, 70, .7)';
                break;
            case 'steel':
                backGround = 'rgba(183, 183, 206, .7)';
                break;
            case 'fairy':
                backGround = 'rgba(214, 133, 173, .7)';
                break;
            default:
                backGround = 'rgba(145,154,162, .7)';
                break;
        }

        const config = {
            type: 'radar',
            options: {
                elements: {
                    line: {
                        borderWidth: 1
                    }
                },
                responsive: true,
                scales: {
                 
                    
                    pointLabels: {
                        display: false
                    },
                    r: {
                        ticks: {
                            display: false,
                            min:0,
                            max:150,
                            beginsAtZero: true 
                        },
                        grid:{
                            // color: "rgba(0, 0, 0, 0.3)"
                            color:backGround
                        },
                        angleLines: {
                            color: "rgba(0, 0, 0, 0.3)"
                            
                        }
                       
                    
                     },
                     
                 
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                }
            },
            data: {
                labels: [
                    data.name.toUpperCase(), 
                    'HP',
                    'ATK',
                    'DEF',
                    'S-ATk',
                    'S-DEF',
                    'SPEED',
                    

                ],
                datasets: [
                    {
                        label: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                        data: [0,data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat, data.stats[4].base_stat, data.stats[5].base_stat],
                        fill: true,
                        backgroundColor: backGround,
                        borderColor: backGround,
                        pointBackgroundColor: backGround,
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(54, 162, 235)'
                    }
                ]

            },

        }
        console.log(hp)

        const myCanvas = document.getElementById('myChart')


        const myChart = new Chart(myCanvas, config)

    })
})


