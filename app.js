let x = 10;
let y = 5;

let sum = x + y ;
let difference= x - y ;
let product = x * y;
let quotient = x % y;

console.log(sum ,  difference , product ,  quotient);
 


let age = prompt ("enter your correct age");
if (age >= 18){
    alert("you are an adult ")
}
else{
   alert("you are a minor")
}


let fruits = ["Apple" , "Banana" , "Cherry"];
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}




let firstName = "John";
let lastName = "Doe";
let fullName = firstName  + " "+lastName;
alert( "Hello,  "+fullName);




let isAdmin = true;
let isLoggedIn = false;
if(isLoggedIn){
  if ( isAdmin) {
    console.log("welcome , admin !");
  }
  else{
    console.log("welcome , user!");
  }
}
   else{
   console.log("plz log in first");
   }


