const prompt = require('prompt-sync')({sigint: true})


let num1 = Number(prompt(" What can you do? Enter your age to find out: "))

if (num1 < 16){
    console.log(" You can not drive. Life sucks for you. ")
}

else if (num1 > 16){
    console.log(" You can drive but not vote. ")
}
else if(num1 >= 18){
    console.log(" You can vote but not rent a car.")
}
else if (num1 >= 25){
    console.log(" You can pretty much do anything. ")
}


