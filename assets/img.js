import { img } from './cards.js';
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get('id');
const container = document.getElementById('img');
const imgTotal = document.getElementById('imgTotal');


const ver = () => {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    img1.addEventListener('click', () => {
        imgTotal.src = img1.dataset.img;

    })
    img2.addEventListener('click', () => {
        imgTotal.src = img2.dataset.img;

    })
    img3.addEventListener('click', () => {
        imgTotal.src = img3.dataset.img;

    })
}


img.forEach(element => {
    if (element.id == id) {
        element.img.forEach((imagen, index) => {
            $(container).append(`
                <div id="img${index}" class="card" style="width: 18rem;" data-img="${imagen}">
                    <img src="${imagen}" class="card-img-top" alt="...">
                </div>
            `);
            imgTotal.src = imagen;

        });
        ver();
    }
});






