
function leerCantidad() {
    let m3 = document.getElementById("input").value;
    let cuentaArena = (m3 * 1.05)
    let cuentapiedra = (m3 * 1.05)
    let cemento = m3 * 7.5
    let arena = Math.round(cuentaArena)
    let piedra = Math.round(cuentapiedra)
    document.getElementById("resultadoarena").innerHTML = `${arena}`
    document.getElementById("resultadocemento").innerHTML = `${cemento}`;
    document.getElementById("resultadopiedra").innerHTML = `${piedra}`;
  }
  leerCantidad()

  function leerCantidadLadrillos() {
    let m2 = document.getElementById("input2").value;
    let ladrillos = m2 * 23
    document.getElementById("ladrillo12").innerHTML = ` ${ladrillos}`
  }
  leerCantidadLadrillos()

  function reset() { 
    document.getElementById("input2").value = "";
    document.getElementById("input").value = "";  
    leerCantidad()
    leerCantidadLadrillos()
  }

