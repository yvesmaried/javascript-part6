let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

myButton.addEventListener("click", function () {

  days.forEach(element => {
    let myP = document.createElement('p');
    myText.appendChild(myP);
    myP.innerText = element;

    if (element == 'Samedi' || element == 'Dimanche') {

      myP.style.fontWeight = 'bold';

    }
  })

})