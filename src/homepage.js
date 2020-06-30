import { content } from './index';

export function renderMain() {

    
    const home = document.createElement('div');
    home.classList.add('home')

    
    const logo = document.createElement('img');
    logo.id = 'logo';
    logo.src = './img/logo.jpg';
    home.appendChild(logo);

    
    const restaurant = document.createElement('span');
    restaurant.classList.add('restaurant-name');
    restaurant.textContent = 'Miracle Bakery';
    home.appendChild(restaurant);

    
    const nav = document.createElement('ul');
    nav.classList.add('top-navigation');

    const home1 = document.createElement('li');
    home1.id = "home1";
    home1.textContent = 'Home';
    nav.appendChild(home1);

     
    const menu = document.createElement('li');
    menu.id = "menu";
    menu.textContent = 'Menu';
    nav.appendChild(menu);

    
    const about = document.createElement('li');
    about.id = 'about';
    about.textContent = 'About';
    nav.appendChild(about);

    
    const contact = document.createElement('li');
    contact.id = 'contact';
    contact.textContent = 'Contact';
    nav.appendChild(contact);

    
    const main = document.createElement('div');
    main.id = 'main';

  
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('center-text-container');
    const title = document.createElement('h1');
    title.classList.add('center-text');
    title.textContent = 'Cupcakes! Pastries! Waffles!';
    titleContainer.appendChild(title);
    main.appendChild(titleContainer);

    content.appendChild(home);
    content.appendChild(nav);
    content.appendChild(main);
}