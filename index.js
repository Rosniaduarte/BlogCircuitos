const imgUno = document.getElementById('imgUno');
const imgDos = document.getElementById('imgDos');
const imgTres = document.getElementById('imgTres');
const imgTotal = document.getElementById('imgTotal');



imgUno.addEventListener('click',()=>{
    imgTotal.src = imgUno.dataset.img;

})
imgDos.addEventListener('click',()=>{
    imgTotal.src = imgDos.dataset.img;

})
imgTres.addEventListener('click',()=>{
    imgTotal.src = imgTres.dataset.img;
    
})