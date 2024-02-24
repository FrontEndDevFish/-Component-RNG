
document.addEventListener('DOMContentLoaded', function () {

let rngNum = document.getElementById("rng-number");
let rngCta = document.getElementById("rng-cta");

rngCta.addEventListener("click", displayNum);

function displayNum() {
    let randomNum = Math.floor(Math.random() * 100);
    rngNum.textContent = randomNum;
}

window.onload = displayNum;

});