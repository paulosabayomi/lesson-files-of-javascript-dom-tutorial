// let form = document.getElementById('page-form')

let form = document.forms['page-form']

// console.log(form);

let secondInputField = form['second-input']
// console.log(secondInputField);

form.onsubmit = (event) => {
    event.preventDefault()
    if (secondInputField.value == "") {
        alert("second input field is empty")
        return 
    }

    console.log("form submitted!");
    // other stuffs

}