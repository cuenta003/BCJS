const likes = ['Juan', 'Pablo', 'María', 'Pedro', 'Ana', 'paola', 'david', 'Diego', 'pamela'];

const EmpiezanConA = likes.filter((Elemento) => {
    return Elemento.toUpperCase().startsWith("P");
});

console.log(EmpiezanConA);