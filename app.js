
const img = document.querySelector('.apresentacao__imagem__galaxia');
const marte = document.querySelector('.marte');
const terra = document.querySelector('.terra');
const venus = document.querySelector('.venus');
const plutao = document.querySelector('.plutao');
const btn = document.querySelector('.btn');


const imagensPlanetas = ["/imagens/mars.jpg","/imagens/earth.jpg", "/imagens/venus.jpg", "/imagens/saturno.jpg", "/imagens/plutao.jpg"];


    marte.addEventListener('click',   mudandoImagemPlanetaMars);
    terra.addEventListener('click',   mudandoImagemPlanetaTerra)
    venus.addEventListener('click',   mudandoImagemPlanetaVenus)
    plutao.addEventListener('click',  mudandoImagemPlanetaPlutao)


function mudandoImagemPlanetaMars () {
    img.setAttribute("src", imagensPlanetas[0])
}

function mudandoImagemPlanetaTerra () {
    img.setAttribute("src", imagensPlanetas[1])
}
function mudandoImagemPlanetaVenus () {
    img.setAttribute("src", imagensPlanetas[2]) 
 }
 
 function mudandoImagemPlanetaPlutao () {
    img.setAttribute("src", imagensPlanetas[4])  
 }

 
