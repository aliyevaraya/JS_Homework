1//
function calcAge(age){
    return(day = 365*age)
}
console.log(calcAge(22))

// 2// 
let sum2=0
for(let i=1;i<10;i++){
    if(i%2==0){
        sum2=sum2+i 
    }
}
console.log("Sum of even numbers:",sum2);


//3//
 let multiply=1;
for(i=0;i<17;i++){
    if(i%2!=0)
    multiply=multiply*i
}
console.log("Multiply of odd number:", multiply);


//4// 
let multiply2=1;
for(i=10; i <= 18;i++){
    multiply2=multiply2*i
}
console.log("Multiply of numbers between 10 and 18",multiply2);

5// 
let sum5=0;
for(i=17; i <= 30;i++){
    if(i==19){
        continue;
    }
    if(i==20){
        continue;
    }
    sum5=sum5+i
    
}
console.log("Sum of numbers between 17 and 30:",  sum5);

