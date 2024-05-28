// entry file
import './home/home.css';
import './reset.css';
import './index.css'

import { appendElements } from './home/home';

const listItems = document.querySelectorAll('ul li');

listItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all items
        listItems.forEach(li => li.classList.remove('active'));
        // Add active class to the clicked item
        this.classList.add('active');
    });
});

appendElements();