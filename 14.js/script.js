1//
function calcAge(age){
    return(day = 365*age)
}
console.log(calcAge(22))

// 2// 
let sum2=0
for(let a=1;a<10;a++){
    if(a%2==0){
        sum2=sum2+a 
    }
}
console.log("Sum of even numbers between 0 and 10:",sum2);


//3//
 let multiply=1;
for(m=0;m<17;m++){
    if(m%2!=0)
    multiply=multiply*m
}
console.log("Multiply of odd number between 0 and 17:", multiply);


//4// 
let multiply2=1;
for(n=10; n <= 18;n++){
    multiply2=multiply2*n
}
console.log("Multiply of numbers between 10 and 18:",multiply2);

5// 
let sum5=0;
for(s=17; s <= 30;s++){
    if(s==19 || s==20){
        continue;
    }
    sum5=sum5+s
    
}
console.log("Sum of numbers between 17 and 30:",  sum5);

6//
let i=1;
let sum6=0;
while(i<30){
    if(i%2==0){
        sum6=sum6+i;
    }
    i++;
}
    console.log(`Sum of even numbers between 0 and 30:`, sum6);


let j=1;
let sum6odd=0;
while(j<30){
    if(j%2!=0){
        sum6odd+=j;
    }
    j++;
}
console.log(`Sum of odd number between 0 and 30:`, sum6odd);

console.log(`Subtract of even and odd numbers between 0 and 30:`,sum6odd-sum6);
 
7//
for(e=1;e<17;e++){
    if(e%2==0){
        console.log(` ${e} is even number and  ${e}*${e}=${e**2}`)
    }
}
