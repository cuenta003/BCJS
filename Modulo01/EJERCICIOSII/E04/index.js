const paroimpar = function (dato1) {
    var resultado = dato1 % 2;
    if( resultado === 0 ){
        console.log("Par");
    }
    else {
        console.log("Impar");
    }
  };
  
  paroimpar(7);
  paroimpar(100);