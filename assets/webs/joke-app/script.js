const seccionMain = document.getElementById(`main`)
const boton = document.getElementById(`boton`)
const boton2 = document.getElementById(`boton2`)
const URL_App = "https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&idRange=1-6"

const URL_App_en = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&idRange=1-319`



boton.addEventListener(`click`, function(){
    getChiste()
});
function getChiste (){
    fetch(URL_App)
    .then((resp) => resp.json())
    .then((data) => {
        let y = `${data.setup}`
        let z = `${data.delivery}`
        if(y ==="undefined"  || z==="undefined"){
            getChiste()
        } else{
            seccionMain.innerHTML = `${data.setup} ${data.delivery}`
        }     
    })
    .catch((error) => {
      console.log("Ocurrió un error al obtener la información:", error);
      seccionMain.innerHTML = `Intente mas tarde`;
    })
}



boton2.addEventListener(`click`, function(){
    getChiste_en()
});

function getChiste_en (){
    fetch(URL_App_en)
    .then((resp) => resp.json())
    .then((data) => {
        let y = `${data.setup}`
        let z = `${data.delivery}`
        if(y ==="undefined"  || z==="undefined"){
            getChiste_en()
        } else{
            seccionMain.innerHTML = `${data.setup} ${data.delivery}`
        }     
    })
    .catch((error) => {
      console.log("Ocurrió un error al obtener la información:", error);
      seccionMain.innerHTML = `Intente mas tarde`;
    })
}