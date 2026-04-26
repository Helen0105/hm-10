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
      // oneSquare.style.height = "150px";
    } else {
      oneSquare.style.width = "100px";
      oneSquare.style.height = "100px";
    }
  });

  size = !size;
}, 1000);


// let score = 0;










// const target = document.getElementById('circle-target');
// const scoreTab = document.getElementById('score'); 
// const area = document.getElementById('game-container');

// let count = 0;

// function move() {
// const x = Math.floor(Math.random() * (window.innerWidth - 30));
// const y = Math.floor(Math.random() * (window.innerHeight - 30));

//     target.style.left = x + 'px';
//     target.style.top = y + 'px';
// }


// setInterval(move, 1000);









const target = document.getElementById('circle-target');
const scoreTab = document.getElementById('score'); 
const area = document.getElementById('game-container');

let count = 0;

function move() {
  // const x = Math.floor(Math.random() * (window.innerWidth - 30));
// const y = Math.floor(Math.random() * (window.innerHeight - 30));
    const x = Math.floor(Math.random() * (area.clientWidth - 30));
    const y = Math.floor(Math.random() * (area.clientHeight - 30));

    target.style.left = x + 'px';
    target.style.top = y + 'px';
}


setInterval(move, 1500);
target.onclick = () => {
    count++;
    scoreTab.textContent = count;
};











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