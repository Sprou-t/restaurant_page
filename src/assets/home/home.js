function loadHomePage(){
    let contentSection = document.querySelector('#content');
    let textAreaDiv = document.createElement('div');
    textAreaDiv.classList.add('textArea');

    

    let firstSentence = document.createElement('p');
    firstSentence.textContent = `Welcome to WOMBO COMBO`;
    firstSentence.classList.add('firstSentence');

    let secondSentence = document.createElement('p');
    secondSentence.textContent = 'Your destination for finger-licking soul food!';
    secondSentence.classList.add('secondSentence');


    
    textAreaDiv.append(firstSentence,secondSentence);

    contentSection.appendChild(textAreaDiv);
}
export {loadHomePage};