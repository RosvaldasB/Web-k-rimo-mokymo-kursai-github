function pourCoffee(x) {
    x.classList.toggle("bi-cup-hot")
}

function showHide() {
    let x = document.getElementById('hidden');
    if(x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function swapContent () {
    let x = document.getElementById('tekstas');
    if(x.innerHTML === "Labas") {
        x.innerHTML = "Sveiki visi";
    } else {
        x.innerHTML = "labas";
    }
}

function addClass() {
    let element = document.getElementById('manotekstas');
        element.classList.toggle("manostilius");
}