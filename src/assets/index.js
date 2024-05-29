// entry file
import './home/home.css';
import './reset.css';
import './index.css';
import './about/about.css';

import { loadHomePage } from './home/home';
import { loadAboutPage } from './about/about';

const navItems = document.querySelectorAll('ul li');
const pageContent = document.querySelector('#content')

navItems.forEach(item => {
    item.addEventListener('click', function() {
        //clear the content
        pageContent.textContent = '';
        // Remove active class from all items
        navItems.forEach(li => li.classList.remove('active'));
        // Add active class to the clicked item
        item.classList.add('active');

        //change the content
        if (item.textContent==='Home'){
            loadHomePage();
        }

        else if (item.textContent==='Menu'){
            
        }

        else{
            loadAboutPage();
        }
    });
});



