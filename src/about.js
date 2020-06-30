import { main } from './index';

export function renderAbout() {
    const container = document.createElement('div');
    container.id = 'about-info';

    const text = document.createElement('p');
    text.textContent = 'Miracle Bakery provides a scrumptious assortments of delicasies that would definitely satisfy your sweet tooth. Do visit us and try them for yourself. Utmost care is taken to ensure health and hygiene.';
    
    container.appendChild(text);
    main.appendChild(container);
}