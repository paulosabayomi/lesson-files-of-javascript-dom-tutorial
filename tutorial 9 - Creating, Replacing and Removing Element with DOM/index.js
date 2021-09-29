let action_btn = document.querySelector('#action')

let container_div = document.querySelector('.container')

let firstDivInContainer = document.querySelector('.container > div')

let first_p_tag_in_container = document.querySelector('.container > p')

action_btn.onclick = () => {
    let new_div = document.createElement('div')
    let new_div_text_node = document.createTextNode('I am the new DIV element')

    new_div.appendChild(new_div_text_node)

    // container_div.appendChild(new_div)

    // container_div.prepend(new_div)

    // container_div.insertBefore(new_div, firstDivInContainer)

    container_div.replaceChild(new_div, firstDivInContainer)

    // new_div.innerHTML = "<em> I am the new DIV element</em>"
}

first_p_tag_in_container.addEventListener('click', (event) => {
    console.log(event);
    event.target.remove()
})