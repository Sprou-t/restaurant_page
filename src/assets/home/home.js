function appendElements(){
    let contentSection = document.querySelector('#content');
    let textAreaDiv = document.createElement('div');
    textAreaDiv.classList.add('textArea');

    let firstSentence = document.createElement('p');
    firstSentence.textContent = 'Get 25% off your first order'

    let secondSentence = document.createElement('p');
    let boldWords = document.createElement('b');
    boldWords.textContent = 'WomboCombo'
    secondSentence.textContent = `Welcome to the ${boldWords}!`

    let thirdSentence = document.createElement('p');
    thirdSentence.textContent = `Welcome to WomboCombo, your new destination for finger-licking soul food! At WomboCombo, we specialize in crafting an array of exciting and
    mouth-watering meat dishes, ranging from succulent chicken and savory pork to juicy beef and delectable seafood. Our culinary team transforms
    these fresh, high-quality ingredients into soul-soothing meals that will tantalize your taste buds. Whether you're a seasoned food enthusiast
    or a newcomer to soul food, WomboCombo offers a warm and cozy atmosphere where you can indulge in delightful combinations and flavors that will
    make you feel right at home. Come join us for an unforgettable culinary experience that promises to satisfy your cravings and warm your heart.`;

    let exploreBtn = document.createElement('button');
    exploreBtn.textContent = 'Explore Menu';


    let contactSection = document.createElement('div');
    contactSection.classList.add('.contact_section');

    let reservationBtn = document.createElement('button');
    reservationBtn.textContent = 'RESERVATIONS';
    let callBtn = document.createElement('button');
    callBtn.textContent = 'Call (828) 5899-252';
    let emailBtn = document.createElement('button');
    emailBtn.textContent = 'Email Us!';

    contactSection.append(reservationBtn,callBtn,emailBtn);

    
    textAreaDiv.append(firstSentence,secondSentence,thirdSentence,
        exploreBtn,contactSection);

    contentSection.appendChild(textAreaDiv);
}
export {appendElements};