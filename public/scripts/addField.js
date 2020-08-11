// Find the button
document.querySelector("#add-time")
.addEventListener('click', cloneField)

// Action the button must perform
function cloneField() {
    //Doubling fields
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
   
   //Clear the fields
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })

    //Page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}