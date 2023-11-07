document.getElementById("fetchPokemon").addEventListener("click", function() {
    const columns = [];
    for (let i = 1; i <= 4; i++) {
        columns.push(document.getElementById(`column${i}`));
        columns[i - 1].innerHTML = '';
    }

    // Realiza una solicitud AJAX para obtener la lista de los primeros 151 Pokémon
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            // Recorre la lista de Pokémon y muestra sus nombres en columnas
            data.results.forEach(function(pokemon, index) {
                const name = pokemon.name;
                const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`; // Se suma 1 al índice para obtener la imagen correcta

                const listItem = document.createElement("li");
                listItem.className = "list-group-item d-flex flex-column align-items-center";
                const pokemonImage = document.createElement("img");
                pokemonImage.src = imageUrl;
                pokemonImage.alt = `Imagen de ${name}`;
                
                const button = document.createElement("button");
                button.className = "btn btn-primary";
                button.textContent = "Ver Detalles";
                button.addEventListener("click", function() {
                    showPokemonDetails(name, imageUrl);
                });

                listItem.className = "list-group-item d-flex justify-content-between align-items-center";
                listItem.textContent = name;
                listItem.appendChild(pokemonImage)
                listItem.appendChild(button);

                // Asigna el Pokémon a una de las columnas en función del índice
                columns[index % 4].appendChild(listItem);
            });
        } else {
            console.error("Error al obtener la lista de Pokémon.");
        }
    };

    xhr.send();
});

// Función para mostrar detalles del Pokémon en el modal
function showPokemonDetails(name, imageUrl) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const modalBody = document.getElementById("modalBody");
            const pokemonName = document.getElementById("pokemonName");
            const pokemonImage = document.getElementById("pokemonImage");
            const pokemonHeight = document.getElementById("pokemonHeight");
            const pokemonWeight = document.getElementById("pokemonWeight");

            pokemonName.textContent = data.name;
            pokemonImage.src = imageUrl;
            pokemonHeight.textContent = data.height;
            pokemonWeight.textContent = data.weight;

            // Mostrar el modal
            $('#pokemonModal').modal('show');
        } else {
            console.error("Error al obtener detalles del Pokémon.");
        }
    };

    xhr.send();
}
