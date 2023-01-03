let posicion = 0;

const agregarGasto = function () {
  console.log("Ingrese los siguientes datos que se solicitan:");
  const descrip = prompt("Introduce Descripcion del Gasto: ");
  const montogasto = prompt("Introduce Monto del Gasto: GTQ. ");
  localStorage.setItem("desc_" + posicion, descrip);
  localStorage.setItem("monto_" + posicion, montogasto);
  posicion++;
};

const mostrarGasto = function () {
  console.log("INICIO LISTADO DE GASTOS:------");
  for (let index = 0; index < posicion; index++) {
    console.log(
      "(" +
        index +
        ") " +
        localStorage.getItem("desc_" + index) +
        " - " +
        localStorage.getItem("monto_" + index)
    );
  }
  console.log("FIN LISTADO DE GASTOS:------");
};

const editarGasto = function () {
  const numeroGasto = parseInt(prompt("Introduce código de Gasto: "));
  const descrip = prompt("Introduce Descripcion del Gasto: ");
  const montogasto = prompt("Introduce Monto del Gasto: GTQ. ");

  localStorage.setItem("desc_" + numeroGasto, descrip);
  localStorage.setItem("monto_" + numeroGasto, montogasto);

  console.log("desc_" + numeroGasto + "y monto_" + numeroGasto + " EDITADO");
};

const eliminarGasto = function () {
  const numeroGasto = parseInt(prompt("Introduce código de Gasto: "));

  localStorage.removeItem("desc_" + numeroGasto);
  localStorage.removeItem("monto_" + numeroGasto);

  console.log("desc_" + numeroGasto + "y monto_" + numeroGasto + " ELIMNADO");
};

const opcionesMenu = function () {
  console.log("SELECCIONE :");
  console.log("(1) Añadir Gasto");
  console.log("(2) Mostrar Gasto");
  console.log("(3) Editar Gasto");
  console.log("(4) Eliminar Gasto");
  console.log("(5) Salir");
};

const menuControlador = function () {
  let opcion = 5;

  do {
    // opcionesMenu();

    opcion = parseInt(
      prompt(
        "Elija una Opcion => (1) Añadir, (2) Mostrar, (3) Editar, (4) Eliminar, (5) Salir  "
      )
    );

    if (opcion == 1) {
      agregarGasto();
    } else if (opcion == 2) {
      mostrarGasto();
    } else if (opcion == 3) {
      editarGasto();
    } else if (opcion == 4) {
      eliminarGasto();
    }
  } while (opcion < 5);
};

menuControlador();
