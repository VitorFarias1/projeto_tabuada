// Elements selection
const multiplicationForm = document.querySelector('#multiplication-form')
const numberInput= document.querySelector('#number')
const multiplicationInput = document.querySelector('#multiplicator')
const multiplicationTable = document.querySelector('#multiplication-operation');

// Functions
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        console.log(result)
    }
}


// Events
multiplicationForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return

    console.log(multiplicationNumber, multiplicatorNumber);

    createTable(multiplicationNumber, multiplicatorNumber)
})