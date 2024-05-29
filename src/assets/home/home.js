let contentSection = document.querySelector('#content');

function loadHomePage(){
    let textAreaDiv = document.createElement('div');
    textAreaDiv.classList.add('textArea');

    

    let firstSentence1 = document.createElement('p');
    firstSentence1.textContent = `Welcome to `;
    firstSentence1.classList.add('firstSentence1');
    let firstSentence2 = document.createElement('span');
    firstSentence2.textContent = `WOMBO`;
    firstSentence2.classList.add('firstSentence2');
    let firstSentence3 = document.createElement('span');
    firstSentence3.textContent = `COMBO`;
    firstSentence3.classList.add('firstSentence3');
    firstSentence1.append(firstSentence2,firstSentence3);

    let secondSentence = document.createElement('p');
    secondSentence.textContent = 'Your destination for finger-licking soul food!';
    secondSentence.classList.add('secondSentence');


    
    textAreaDiv.append(firstSentence1,secondSentence);

    contentSection.appendChild(textAreaDiv);
}
export {loadHomePage};