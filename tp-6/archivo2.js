document.getElementById("fetchPokemon").addEventListener("click", function() {
    const columns = [];
    for (let i = 1; i <= 4; i++) {
        columns.push(document.getElementById(`column${i}`));
        columns[i - 1].innerHTML = '';
    }

    // Realiza una solicitud AJAX para obtener la lista de Pokémon del 152 al 300
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=300";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            // Recorre la lista de Pokémon del 152 al 300 y muestra sus nombres en columnas
            for (let index = 151; index < 300; index++) {
                const pokemon = data.results[index];
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
                listItem.appendChild(pokemonImage);
                listItem.appendChild(button);

                // Asigna el Pokémon a una de las columnas en función del índice
                columns[index % 4].appendChild(listItem);
            }
        } else {
            console.error("Error al obtener la lista de Pokémon.");
        }
    };

    xhr.send();

    // Función para mostrar los detalles del Pokémon en el modal
    function showPokemonDetails(name, imageUrl) {
        const modal = document.getElementById("pokemonModal");
        const modalTitle = document.querySelector("#pokemonModal .modal-title");
        const modalImage = document.querySelector("#pokemonModal #pokemonImage");
        const modalName = document.querySelector("#pokemonModal #pokemonName");

        // Aquí puedes realizar una solicitud adicional para obtener más detalles del Pokémon si es necesario.

        // Actualiza el contenido del modal con los detalles del Pokémon
        modalTitle.textContent = `Detalles de ${name}`;
        modalImage.src = imageUrl;
        modalImage.alt = `Imagen de ${name}`;
        modalName.textContent = name;

        // Abre el modal
        $(modal).modal('show');
    }
});

