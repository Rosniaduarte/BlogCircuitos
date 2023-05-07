import { cards } from './assets/cards.js';

const container = document.getElementById('conatainer');

cards.forEach(card => {
    $(container).append(`
        <div class="card " style="width: 18rem; margin-left: 20px;">
            <img src="${card.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.description}</p>
                <a href="${card.url}" class="btn btn-primary">ver</a>
            </div>
        </div>
    `);
});






