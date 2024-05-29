function loadMenuPage(picture, name, cost, container) {
    let menuCard = document.createElement('div');
    menuCard.classList.add('menuCard');

    let menuPic = document.createElement('img');
    menuPic.src = picture;
    menuPic.classList.add('pic');

    let menuText = document.createElement('div');

    let menuName = document.createElement('p');
    menuName.textContent = name;

    let price = document.createElement('div');
    price.textContent = cost;
    price.classList.add('price');

    menuText.append(menuName, price);
    menuCard.append(menuPic, menuText);

    container.appendChild(menuCard);
}

export { loadMenuPage };
//don't need parameters as it is needed only when called