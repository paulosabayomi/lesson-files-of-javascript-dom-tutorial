// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.querySelector

document.getElementById('p-1').innerText = "Hello the first P Tag"
// HTML collection like an array
let div1 = document.getElementsByClassName('div-1')
console.log(div1)

div1[0].innerHTML = "<em> Hello the first DIV child element </em>"

let pageTags = document.getElementsByTagName('div')
console.log(pageTags);

// pageTags[2].innerText = "Hello collection index 2"

let secondDiv = document.querySelector('.div-2')
secondDiv.innerHTML = "Hello second div"

let secondPTagByParent = document.querySelector('.container #p-2')
secondPTagByParent.innerHTML = "Hello second P Tag"