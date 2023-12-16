let ciudad = document.getElementById(`city`);
let boton = document.getElementById(`btn`);
let resultado = document.getElementById(`resultado`);

function getClima() {
  let city = ciudad.value;
  let URL_ = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=190cf2ce861a7563e8ca473d10b3e6e5&units=metric`;
  fetch(URL_)
    .then((resp) => resp.json())
    .then((data) => {
      resultado.innerHTML = `<h2>Clima en la ciudad de:  ${data.name}</h2>
      <h2>Temperatura actual de:  ${data.main.temp}</h2>
      <h2>La humedad es de:  ${data.main.humidity}%</h2>`;
    })
    .catch((error) => {
      console.log("Ocurrió un error al obtener la información:", error);
      resultado.innerHTML = `<h3>Ingrese una ciudad valida</h3>`;
    });
}

ciudad.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getClima();
  }
});

boton.addEventListener(`click`, getClima);

ciudad.addEventListener("input", function () {
  if (ciudad.value === "") {
    resultado.innerHTML = "";
  }
});
