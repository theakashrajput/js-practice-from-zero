// Task 1
// elem.addEventListener('click', ()=>{
//     text.hidden = true;
// })

// Task 2
// document.querySelector("#elem2").addEventListener('click', (det)=>{
//     det.currentTarget.hidden = true;
// })

// document.querySelector("#elem2").addEventListener("click", () => alert("1"));
// document.querySelector("#elem2").removeEventListener("click", () => alert("1"));
// document.querySelector("#elem2").onclick = () => alert(2);

let field = document.querySelector("#field");
let ball = document.querySelector("#ball-img");

field.addEventListener('click', det => {

    let fieldCoords = field.getBoundingClientRect();

    let ballCoords = {
        top: det.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: det.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    }

    if(ballCoords.top<0) ballCoords.top = 0;
    if(ballCoords.left<0) ballCoords.left = 0;

    if(ballCoords.left + ball.clientWidth > field.clientWidth){
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    if(ballCoords.top + ball.clientHeight > field.clientHeight){
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.top = ballCoords.top + "px";
    ball.style.left = ballCoords.left + "px";
})