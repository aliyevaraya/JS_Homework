let start = document.querySelector(".strbtn");
let stop = document.querySelector(".stpbtn");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let plus1 = document.querySelector(".plus1");
let minus1 = document.querySelector(".minus1");
<<<<<<< HEAD
let addvalue = document.querySelector(".addvalue");
=======
let plusvalue = document.querySelector(".plusvalue");
let numvalue=document.querySelector("#value");

start.style.backgroundColor = "green";
start.style.color = "white";
start.style.width = "70px";
start.style.height = "30px";

result.style.color = "blue";

stop.style.backgroundColor = "red";
stop.style.color = "white";
stop.style.width = "70px";
stop.style.height = "30px";

plus1.style.backgroundColor = "navy";
plus1.style.color = "white";
plus1.style.height = "30px";
plus1.style.width = "130px";

minus1.style.backgroundColor = "navy";
minus1.style.color = "white";
minus1.style.height = "30px";
minus1.style.width = "130px";

reset.style.backgroundColor = "red";
reset.style.fontSize = "15px";
reset.style.width = "90px";
reset.style.height = "30px";
>>>>>>> a24a4a3ad9178cb6be0d5d0419db9c8588a2b7b4

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

<<<<<<< HEAD
addvalue.addEventListener("click", function () {
  specifyvalue = parseInt(document.getElementById("specifyvalue").value);
  all = specifyvalue + counter;
  counter = all;
  result.innerText = counter;
});
=======
// plusvalue.addEventListener("click",function () {
//     result.innerHTML=numvalue.value
//     result.innerText = parseInt(result.innerText)+ parseInt(numvalue.value)

// })
>>>>>>> a24a4a3ad9178cb6be0d5d0419db9c8588a2b7b4
