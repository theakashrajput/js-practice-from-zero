function random() {
    let random = Math.floor(Math.random() * 256);
    return random;
}

function changeColor() {
    let box = document.querySelector(".box");
    let colorDet = document.querySelector(".color-det");
    let color = `rgb(${random()}, ${random()}, ${random()})`;
    let h1 = document.querySelector("h1");
    box.style.backgroundColor = color;
    h1.style.color = color;
    colorDet.textContent = color;
}