const readline = require("readline"); 

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout,
});

rl.question("what name? ",function(name){
    console.log(`Hello ${name}`)
    console.log(`Goodbye, ${name}`)
    rl.close()
});