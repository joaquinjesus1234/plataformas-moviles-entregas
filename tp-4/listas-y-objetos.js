var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

/**
 * 01 - ordenarPorApellido
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * 
 * Retorna: 
 * - el mismo listado, ordenado alfabéticamente por el apellido de la persona 
 */
function ordenarPorApellido(listaDePersonas) {
    return listaDePersonas.sort((a,b) => {
        return a.apellido.localeCompare(b.apellido);
    });
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * 02 - soloNombres
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista de strings, con sólo los nombres de las personas
 */
function soloNombres(listaDePersonas) {
    let listaNombres = [];

    for (let i=0; i<listaDePersonas.length; i++) {
        let nombreDePersona = listaDePersonas[i].nombre;
        listaNombres.push(nombreDePersona);
    }

    return listaNombres;

    // return listaDePersonas.map(p => p.nombre);
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

/**
 * 03 - promedioEdades
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - un numero, con el cálculo del promedio de las edades
 */
function promedioEdades(listaDePersonas) {
    let total = 0;
    for(let i=0; i<listaDePersonas.length; i++) {
        total += listaDePersonas[i].edad;
    }
    return total / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * 04 - soloMayoresDeEdad
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista, array, conteniendo solamente las personas con más de 18 años
 */
function soloMayoresDeEdad(listaDePersonas) {
    //
    const personasMayores = [];

    for (let i = 0; i < listaDePersonas.length; i++) {
        const persona = listaDePersonas[i];
        if (persona.edad > 18) {
            personasMayores.push(persona);
        }
    }

    return personasMayores;
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 05 - laPersonaMayor
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una objeto con la persona de mayor edad en todo el listado. En caso de que hayan 2 personas con la misma edad, se puede retornar la primera que aparezca en el listado.
 */
function laPersonaMayor(listaDePersonas) {
    //
    if (listaDePersonas.length === 0) {
        return null; // Devolvemos null si la lista está vacía
    }

    let personaMayor = listaDePersonas[0]; // Inicializamos con la primera persona de la lista

    for (let i = 1; i < listaDePersonas.length; i++) {
        const personaActual = listaDePersonas[i];
        if (personaActual.edad > personaMayor.edad) {
            personaMayor = personaActual; // Si encontramos una persona mayor, la actualizamos
        }
    }

    return personaMayor;
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));
