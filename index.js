const fname = document.getElementById("fname");
const cardNumber = document.getElementById("cardNumber");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");

const nameOut = document.getElementById("name-out");
const cardNumberOut = document.getElementById("cardNumber-out");
const monthOut = document.getElementById("month-out");
const yearOut = document.getElementById("year-out");
const cvcOut = document.getElementById("cvc-out");

function handleSubmit(event) {
    event.preventDefault();
    
}

fname.addEventListener('keyup', renderFname)
function renderFname() {
    const value = fname.value
    nameOut.textContent = value
}

cardNumber.addEventListener('keyup', renderCardNumber)
function renderCardNumber() {
    const value = cardNumber.value
    cardNumberOut.textContent = value
}

month.addEventListener('keyup', renderMonth)
function renderMonth() {
    const value = month.value
    monthOut.textContent = value
}

year.addEventListener('keyup', renderYear)
function renderYear() {
    const value = year.value
    yearOut.textContent = value
}

cvc.addEventListener('keyup', renderCvc)
function renderCvc() {
    const value = cvc.value
    cvcOut.textContent = value
}


