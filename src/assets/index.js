// entry file

import './home/home.css';
import './reset.css';
import './index.css';
import './about/about.css';
import './menu/menu.css';

import { loadHomePage } from './home/home';
import { loadAboutPage } from './about/about';
import { loadMenuPage } from './menu/menu';

//import image
import pizzaImage from './menu/pexels-christina-petsos-200616875-11568775.jpg';  
import pastaImage from './menu/pexels-igrejapreta-2433979.jpg'
import soupImage from './menu/pexels-kubra-dogu-80605500-11519066.jpg'
import steakImage from './menu/pexels-valeriya-20323431.jpg'

const navItems = document.querySelectorAll('ul li');
const pageContent = document.querySelector('#content')

// Load the home page by default when the website is first visited
loadHomePage();

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
             // Create a container for the menu items
             const menuSection = document.createElement('div');
             menuSection.classList.add('menuSection');
             pageContent.appendChild(menuSection);
 
             // Load the menu items
             loadMenuPage(pizzaImage, 'PIZZA WOMBO', '$8', menuSection);
             loadMenuPage(pastaImage, 'PASTA WOMBO', '$6', menuSection);
             loadMenuPage(soupImage, 'WOMBSOUP', '$5', menuSection);
             loadMenuPage(steakImage, 'WOMBOSTEAK', '$9', menuSection);
        }

        else{
            loadAboutPage();
        }
    });
});



