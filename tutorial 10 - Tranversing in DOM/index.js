// Tranversing in DOM
// DOWNWARD
// SIDEWAYS
// UPWARD


// DOWNWARD
let list_container = document.querySelector('.list-container')

let list_element = list_container.querySelector('.list')

let third_list_element = list_container.querySelector('.list').querySelector('li:nth-child(3)')
console.log(third_list_element.innerText);

console.log(list_container.childElementCount);
console.log(list_container.childNodes);
console.log(list_container.children);

console.log();
console.log();

console.log(list_element.childElementCount);
console.log(list_element.childNodes);
console.log(list_element.children);

// fifth child of the ul list
console.log(list_element.children[4]);
console.log(list_element.children[4].textContent);


console.log();
console.log("// sideways tranversing");
console.log();

// sideways

// prevElementSibling
// nextElementSibling

// prevElementSibling
console.log(list_element.children[1].previousSibling);
console.log(list_element.children[1].previousElementSibling);
list_element.children[1].previousElementSibling.style.color = "red"

// nextElementSibling
console.log(list_element.children[1].nextSibling);
console.log(list_element.children[1].nextElementSibling);
list_element.children[1].nextElementSibling.style.color = "lightgreen"


console.log();
console.log("// upward tranversing");
console.log();
// UPWARD TRANVERSING
// parentElement
console.log(list_element.children[6]); // seventh list
console.log(list_element.children[6].parentNode); 
console.log(list_element.children[6].parentElement); 
console.log(list_element.children[6].parentElement.parentElement); 

list_element.children[6].parentElement.style.backgroundColor = "yellow" // parent element

list_element.children[6].parentElement.parentElement.style.backgroundColor = "navy" // grandparent element