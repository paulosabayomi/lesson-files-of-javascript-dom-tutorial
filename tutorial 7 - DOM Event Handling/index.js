// click, mouse, keyboard, browser (resize, load, onunload)

console.log(document);

let changeBgBtn = document.querySelector('#change-bg')

changeBgBtn.onclick = () => {
    document.body.style.backgroundColor = 'yellow'
}

let greenDiv = document.querySelector('.green-div')

greenDiv.onmouseover = (event) => {
    event.target.style.backgroundColor = 'red'
}

greenDiv.onmouseout = (event) => {
    event.target.style.backgroundColor = 'lightgreen'
}

document.onkeydown = (event) => {
    console.log(event.key)
}