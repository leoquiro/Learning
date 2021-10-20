let colorInput = document.querySelector('#colour')
let hexInput = document.querySelector('#hex')

colourInput.addEventListener('input', () =>{
    let color = colorInput.value;
    hexInput.value = color
    })