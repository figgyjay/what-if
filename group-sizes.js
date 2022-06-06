const prompt = require('prompt-sync')({sigint: true})

let classsize = Number(prompt (" What is the size of your class? "))

if ((classsize % 3) === 0){
    console.log((classsize / 3) * "groups of 2")
}
else if((classsize % 2) === 0){
    console.log("groups of 3 " + (classsize - 2) / 4)
    console.log("groups of 2 " + (classsize - 2) / (classsize/2))

}
else if((classsize % 1) === 0){
    console.log("groups of 3 " + (classsize - 1) / 4)
    console.log("groups of 2 " + (classsize / classsize))

}