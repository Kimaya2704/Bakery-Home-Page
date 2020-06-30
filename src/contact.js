import { main } from './index';

export function renderContact() {
    const container = document.createElement('div');
    container.id = "contact-info";
    
    // Phone no.
    const title = document.createElement('h2');
    title.textContent = 'Contact Info';
    
    // Opening times
    const openingTimes = document.createElement('ul');

    const email = document.createElement('li');
    email.textContent = 'Email ID: enquiry@miracle.com';
    openingTimes.appendChild(email);

    const number = document.createElement('li');
    number.textContent = 'Contact Number: +91 9936662970';
    openingTimes.appendChild(number);

    

    // append to container
    container.appendChild(title);
    container.appendChild(openingTimes);

    // append to main
    main.appendChild(container);
}