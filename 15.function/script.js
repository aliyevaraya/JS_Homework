1//////////////////////////////
const arr1 = [5, 2, 3];
const arr1_2 = [-500, 0, 50];
const arr1_3=[80,5,100]
function getFirstValue(anyarr) {
for (let i = 0; i < anyarr.length; i++) {
     if (typeof anyarr[i] === "number") {
      return anyarr[0];
    }else{
        return
    }
  }
}
console.log(getFirstValue(arr1_3));

2///////////////////////////////
const arr2 = [true, false, true];
function getLastItem(anyarr) {
  return anyarr[anyarr.length - 1];
}
console.log(getLastItem(arr2));

3/////////////
const arr3 = [["hi", "edabit", "fgh", "abc"],"fgh"];
const findIndex = function (anyarr) {
  for (let i = 0; i < anyarr.length; i++) {
    if (typeof anyarr[i] === "string") {
      return i
    }
  }
}
console.log(findIndex(arr3))

4//////////////////////////////////////////
function addition(num1,num2){
return num1+num2
}
console.log(addition(3,-9))

5/////////////////////////////
const lessThan100 = (number1,number2)=>{
    if((number1+number2)<100){
        return true
    }else return false
}
console.log(lessThan100(82,95))
console.log(lessThan100(22,36))

6/////////////////////////////////////////
const obj={
    width: 2,
    length: 5,
    height: 1,
}
let mult=1;
function volumeOfBox(anyobj) {
    for(value in anyobj){
        mult*=anyobj[value]
}
    return mult
}
console.log(volumeOfBox(obj))

7////////////////////////
const points = function (twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
};
console.log(points(38, 8));

8/////////////
const arr5 = [
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
];
const fillInfo = function (anyarry) {
    for ( person of anyarry){
    person.name= "Raya",person.surname= "Eliyeva",person.city="Ganja" 
    }
    return anyarry
};
console.log(fillInfo(arr5));
