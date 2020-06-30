import { main } from './index';

export function renderMenu() {
    renderCupcakes();
    renderPastries();
    renderWaffles();
}

function renderCupcakes() {
    
    const cupcakes = document.createElement('div');
    cupcakes.id = 'cupcakes';
    cupcakes.classList.add('menu');

   
    const cupcakeTitle = document.createElement('h3');
    cupcakeTitle.textContent = 'Cupcakes';
    cupcakes.appendChild(cupcakeTitle);

    
    const items = document.createElement('div');
    items.classList.add('cupcakes-items');

    const item1 = document.createElement('div');
    item1.textContent = 'ButterScotch Cupcake';
    items.appendChild(item1);

    const item2 = document.createElement('div');
    item2.textContent = 'Nutella Cupcake';
    items.appendChild(item2);

    const item3 = document.createElement('div');
    item3.textContent = 'Strawberry Cupcake';
    items.appendChild(item3);

    const item4 = document.createElement('div');
    item4.textContent = 'Oreo Cupcake';
    items.appendChild(item4);

    const item5 = document.createElement('div');
    item5.textContent = 'Red Velvet Cupcake';
    items.appendChild(item5);

    const item6 = document.createElement('div');
    item6.textContent = 'Caramel Cupcake';
    items.appendChild(item6);

    cupcakes.appendChild(items);
    main.appendChild(cupcakes);
}

function renderPastries() {
    
    const pastries = document.createElement('div');
    pastries.id = 'pastries';
    pastries.classList.add('menu');

   
    const pastryTitle = document.createElement('h3');
    pastryTitle.textContent = 'Pastries';
    pastries.appendChild(pastryTitle);

    
    const items = document.createElement('div');
    items.classList.add('pastry-items');

    const item1 = document.createElement('div');
    item1.textContent = 'Tiramisu';
    items.appendChild(item1);

    const item2 = document.createElement('div');
    item2.textContent = 'Black Forest';
    items.appendChild(item2);

    const item3 = document.createElement('div');
    item3.textContent = 'Salted Caramel';
    items.appendChild(item3);

    const item4 = document.createElement('div');
    item4.textContent = 'Pine Apple';
    items.appendChild(item4);

    const item5 = document.createElement('div');
    item5.textContent = 'NY Chocolate';
    items.appendChild(item5);

    pastries.appendChild(items);
    main.appendChild(pastries);
}

function renderWaffles() {
    
    const waffles = document.createElement('div');
    waffles.id = 'waffles';
    waffles.classList.add('menu');

    
    const waffleTitle = document.createElement('h3');
    waffleTitle.textContent = 'Waffles';
    waffles.appendChild(waffleTitle);

    
    const items = document.createElement('div');
    items.classList.add('waffles-items');

    const item1 = document.createElement('div');
    item1.textContent = 'White chocolate';
    items.appendChild(item1);

    const item2 = document.createElement('div');
    item2.textContent = 'Blueberry';
    items.appendChild(item2);

    const item3 = document.createElement('div');
    item3.textContent = 'Triple Chocolate';
    items.appendChild(item3);

    const item4 = document.createElement('div');
    item4.textContent = 'Honey';
    items.appendChild(item4);

    waffles.appendChild(items);
    main.appendChild(waffles);
}