let parentContainer = document.getElementsByClassName('container')[0]

let redP = parentContainer.querySelector('#red-p')

let normalDiv = parentContainer.getElementsByClassName('normal-div')[0]

redP.innerText = 'Hello red P tag'

let imageElement = parentContainer.querySelector('#image-el')

normalDiv.innerHTML = '<em>Hello the normal DIV Element</em>'

// imageElement.src = 'img-1.jpg'
imageElement.setAttribute('src', 'img-1.jpg')

let greenDiv = parentContainer.getElementsByClassName('green-div')[0]

greenDiv.style.color = 'yellow'