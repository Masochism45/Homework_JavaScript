const readline = require("readline"); 

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout,
});

rl.question("Number: ",function(x){
    if (x >= 90){
        console.log("grade 4 ")
    } else{
        console.log("another grade")
    }
    rl.close()
});