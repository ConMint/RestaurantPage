import _ from 'lodash';
import './style.css';
import homePage from './homepage.js';
import menuPage from './menu.js';
import orderPage from './order.js';
import contactPage from './contact';

// page-wide container
const container = document.createElement('div');
container.setAttribute('id','container')
document.body.appendChild(container);

// header with button tabs
const pageHeader = document.createElement('div');
pageHeader.setAttribute('class','pageHeader');
const homeBtn = document.createElement('button');
homeBtn.setAttribute('id','homeBtn');
homeBtn.innerText = 'HOME';
homeBtn.addEventListener('click', () => {
    container.removeChild(canvas);
    container.appendChild(homePage())
});
const menuBtn = document.createElement('button');
menuBtn.setAttribute('id','menuBtn');
menuBtn.innerText = 'MENU';
menuBtn.addEventListener('click', () => {
    container.removeChild(canvas);
    container.appendChild(menuPage())
})

pageHeader.appendChild(homeBtn);
pageHeader.appendChild(menuBtn);

container.appendChild(pageHeader);


container.appendChild(homePage());

contactPage();

orderPage();