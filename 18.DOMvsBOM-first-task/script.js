let start = document.querySelector(".strbtn");
let stop = document.querySelector(".stpbtn");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let plus1 = document.querySelector(".plus1");
let minus1 = document.querySelector(".minus1");
let addvalue = document.querySelector(".addvalue");

let interval;
let counter = 0;
let specifyvalue;
let all;

start.addEventListener("click", function () {
  interval = setInterval(() => {
    counter++;
    result.innerText = counter;
    this.setAttribute("disabled", "true");
    stop.removeAttribute("disabled");
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(interval);
  start.removeAttribute("disabled");
  this.setAttribute("disabled", "true");
});

plus1.addEventListener("click", function () {
  result.innerText++;
  counter = 0;
  clearInterval(interval)
});

minus1.addEventListener("click", function () {
  result.innerText--;
  // counter = 0;
});

reset.addEventListener("click", function () {
  result.innerText = 0;
  // counter = 0;
});

addvalue.addEventListener("click", function () {
  specifyvalue = parseInt(document.getElementById("specifyvalue").value);
  all = specifyvalue + counter;
  counter = all;
  result.innerText = counter;
});
