function appendElements(){
    let contentSection = document.querySelector('#content');
    let textAreaDiv = document.createElement('div');
    textAreaDiv.classList.add('textArea');

    

    let firstSentence = document.createElement('p');
    firstSentence.textContent = `Welcome to WOMBOCOMBO`;

    let secondSentence = document.createElement('p');
    secondSentence.textContent = 'your destination for finger-licking soul food!';
    

    let thirdSentence = document.createElement('p');
    thirdSentence.textContent = `We specialize in crafting an array of exciting and
    mouth-watering meat dishes, ranging from succulent chicken and savory pork to juicy beef and delectable seafood.`;

    

    
    textAreaDiv.append(firstSentence,secondSentence, thirdSentence,);

    contentSection.appendChild(textAreaDiv);
}
export {appendElements};