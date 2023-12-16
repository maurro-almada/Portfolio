const seccionMain = document.getElementById("seccionMain");
const URL_API = "https://pokeapi.co/api/v2/pokemon/";
let input = document.getElementById("busc");
let buscar = input.value;
let encontrado_poke = document.getElementById("find");
let encontrado_error = document.getElementById("error");

let isLoading = false;
let offset = 0;
const limit = 16;

function cargarMasPokemon() {
  if (isLoading) {
    return;
  }

  isLoading = true;

  fetch(`${URL_API}?offset=${offset}&limit=${limit}`)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((result) => {
        fetch(result.url)
          .then((response) => response.json())
          .then((poke) => {
            GetPokemon(poke);
          });
      });
      offset += limit;
      isLoading = false;
    })
    .catch((error) => {
      console.error("Error al cargar más Pokémon:", error);
      isLoading = false;
    });
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    fetch(URL_API + `${input.value}`)
      .then((response) => {
        if (!response.ok) {
          encontrado_error.innerHTML = `<p>Busca de Nuevo<p/>`;
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        return response.json();
      })

      .then((data) => {
        {
          encontrado_poke.classList.add("divPokemonfind");
          encontrado_poke.innerHTML = `
        <img src="${data.sprites.other["official-artwork"].front_default}">
        <p>#ID: ${data.id}</p>
        <h2>${data.name}</h2>
        <p>${data.height} Pies<p/>
        <p>${data.weight} Kgs</p>
        <p>${data.base_experience} XP</p>
        <p class="attack">${data.stats[1].base_stat} ATTACK </p>`;
        }
      });
  }
});

function GetPokemon(poke) {
  const div = document.createElement("div");
  div.classList.add("divPokemon");
  div.innerHTML = `
    <img src="${poke.sprites.other["official-artwork"].front_default}">
    <p>#ID: ${poke.id}</p>
    <h2>${poke.name}</h2>
    <p>${poke.height} Pies<p/>
    <p>${poke.weight} Kgs</p>
    <p>${poke.base_experience} XP</p>
    <p class="attack">${poke.stats[1].base_stat} ATTACK </p>`;
  seccionMain.append(div);
}

function handleScroll() {
  const scrollTop = window.scrollY || window.pageYOffset;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = window.innerHeight;

  if (scrollTop + clientHeight >= scrollHeight - 50) {
    cargarMasPokemon();
  }
}

window.addEventListener("scroll", handleScroll);

cargarMasPokemon();

input.addEventListener("input", function () {
  if (
    input.value.trim() === "" ||
    parseInt(input.value, 10) >= 15 ||
    parseInt(input.value, 10) < 3
  ) {
    encontrado_poke.style.display = "none";
    encontrado_error.innerHTML = "";
  } else {
    encontrado_poke.style.display = "flex";
  }
});
