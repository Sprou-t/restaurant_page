function loadAboutPage(){
    let pageContent = document.querySelector('#content');
    let textArea = document.createElement('div');
    textArea.classList.add('about');
    textArea.classList.add('textArea');
    let location = document.createElement('p');
    location.textContent = 'Location: 14029 Lind Village, Apt. 219, SC5 9ZH, Port Cayla, Hawaii, Great Britain'
    let phoneNo = document.createElement('p');
    phoneNo.textContent = 'Phone number: +44 7704 607373'
    textArea.append(location,phoneNo);
    pageContent.append(textArea);
}

export {loadAboutPage};