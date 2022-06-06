const prompt = require('prompt-sync')({sigint: true})


let age = Number(prompt(" What can you do? Enter your age to find out: "))

if (age < 16){
    console.log(" You can not drive. Life sucks for you. ")
}

else if (age === 16){
    console.log(" You can drive but not vote. ")
}
else if(age === 17){
    console.log(" You can drive but not vote. ")
}
else if (age <= 24){
    console.log(" You can vote but not rent a car. ")

}
else {
    console.log(" You can pretty much do anything. ")
}


