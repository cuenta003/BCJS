const pokemons = [
  { nombre: "Meowth de Galar", tipoDePokemon: "Acero" },
  { nombre: "Melmetal", tipoDePokemon: "Acero" },
  { nombre: "Charmander", tipoDePokemon: "Fuego" },
];

// console.log(pokemons[0]);
// console.log(pokemons[1]);
// console.log(pokemons[2]);

// console.log("-BONUS INVESTIGACION-");
// console.log(pokemons);

// console.log("-BONUS EXTRA-");

var n = pokemons.length;
for (var i = 0; i < n; i++) {
  if (pokemons[i].tipoDePokemon == "Fuego") {
    console.log(pokemons[i]);
  }
}
