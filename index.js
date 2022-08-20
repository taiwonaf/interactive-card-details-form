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

    if (!fname.value) {
        let errorId = fname.nextElementSibling.id;
        const error = document.getElementById(errorId);
        error.textContent = "Name cannot be empty";
        console.log("fname testing")
    } else {
        error.textContent = "";
        console.log("Fname testing confirmation")
    }

    if (!cardNumber.value) {
        let errorId = cardNumber.nextElementSibling.id;
        const error = document.getElementById(errorId);
        error.textContent = "Name cannot be empty";
    } else {
        error.textContent = "";
    }

    if (!month.value) {
        let errorId = month.nextElementSibling.id;
        const error = document.getElementById(errorId);
        error.textContent = "Name cannot be empty";
    } else {
        error.textContent = "";
    }

    if (!year.value) {
        let errorId = year.nextElementSibling.id;
        const error = document.getElementById(errorId);
        error.textContent = "Name cannot be empty";
    } else {
        error.textContent = "";
    }

    if (!cvc.value) {
        let errorId = cvc.nextElementSibling.id;
        const error = document.getElementById(errorId);
        error.textContent = "Name cannot be empty";
    } else {
        error.textContent = "";
    }
    
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


