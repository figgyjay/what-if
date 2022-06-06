const prompt = require('prompt-sync')({sigint: true})

let num1 = Number(prompt(" Pick a Number and let's hope it works. "))
if(num1 % 3 == 0){
    console.log (" Fizz ")
}
if(num1 % 5 == 0){
    console.log(" Buzz ")
}
if(num1 % 15 == 0){
    console.log(" FIZZBUZZ ")
}
else{
    console.log(" error: try again ")
}