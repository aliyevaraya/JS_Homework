const result = document.querySelector("#result");
const num1 = document.querySelector(".value1");
const num2 = document.querySelector(".value2");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");
const resetbtn = document.querySelector("#reset");


add.addEventListener("click", function () {
  result.value = +num1.value + +num2.value;
});

sub.addEventListener("click", function () {
  result.value = +num1.value - +num2.value;
});

mul.addEventListener("click", function () {
  result.value = +num1.value * +num2.value;
});

div.addEventListener("click", function () {
  result.value = +num1.value / +num2.value;
});

reset.addEventListener("click", function () {
  num1.value=""  
  num2.value=""  
  result.value = 0;
});

