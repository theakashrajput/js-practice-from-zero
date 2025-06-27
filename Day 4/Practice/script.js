// Infinite SetTimeout (Nested Call)
// setTimeout(function greet(name){
// console.log(`Hello ${name}`);
// setTimeout(greet, 2000, "Aakash");
// }, 2000, "Akash");

// Digital Clock
function showTime() {
  let date = new Date().toLocaleTimeString();
  document.querySelector(".pannel h2").textContent = date;
}

let id = setInterval(showTime, 1000);

// document.querySelector("button").addEventListener("click", () => {
  //   setTimeout(() => { 
    // document.querySelector(".pannel h2").textContent = "Button Clicked";
//     document.querySelector("button").remove();
//    }, 3000);
// })
