let counter = 0;
const display = document.getElementById("timer-display");
const intervalId = setInterval(() => {
  counter = counter + 1;
  display.textContent = "повідомлення номер " + counter;
  if (counter === 5) {
    clearInterval(intervalId);
  }
}, 1000);








const allSquares = document.querySelectorAll("#box li");
let size = true;




// setInterval(oneSquare.style.width = "150px", 1000); 

// allSquares.style.width = "150px"; 


// if (size = true) { ... } 

setInterval(() => {
  allSquares.forEach((oneSquare) => {
    if (size === true) {
      oneSquare.style.width = "200px";
      oneSquare.style.height = "150px";
    } else {
      oneSquare.style.width = "100px";
      oneSquare.style.height = "100px";
    }
  });

  size = !size;
}, 1000);


// let score = 0;




const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const status = document.querySelector(".status");

btn.addEventListener("click", () => {

    // status.value = "ждем..."; 
    // const time = input.value; 


    const time = input.value * 1000;

    status.textContent = "ждем..."; 

    setTimeout(() => {
        status.textContent = "дочекалися!!";
        alert("дзінь");
    }, time);
});