let clickBtn = document.querySelector('#click-btn')
let mouseOverBtn = document.querySelector('#mouse-btn')
// clickBtn.addEventListener('click', () => {
//     alert('Hello awesome guys')
// })

const clickFn = () => {
    alert('Hello awesome guys')
}
clickBtn.addEventListener('click', clickFn)

function mouseOverFn(event){
    event.style.backgroundColor = 'darkgreen'
}

mouseOverBtn.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = "lightblue"
})