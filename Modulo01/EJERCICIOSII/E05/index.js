const personas = [
  { nombre: "Juan", edad: 18 },
  { nombre: "María", edad: 16 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "Pablo", edad: 15 },
  { nombre: "Laura", edad: 19 },
];

// var mayoresdeEdad = personas.filter(function (element) {
//   return element.edad >= 18;
// });

function mayoresdeEdad(params) {
  return params.filter(function (element) {
    return element.edad >= 18;
  });
}

function personaJoven(params) {
  return params.filter(function (element) {
    return Math.min(params.edad);
  });
}

function personaMayor(params) {
  return params.filter(function (element) {
    return Math.max(params.edad);
  });
}

//console.log(mayoresdeEdad);

console.log(mayoresdeEdad(personas));

console.log(personaJoven(personas));

console.log(personaMayor(personas));
