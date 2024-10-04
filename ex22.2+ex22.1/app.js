const readline = require("readline"); 

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout,
});

rl.question("Number: ",function(x){
    if (x >= 90){
        console.log("grade 4")
    } else if(x >=80){
        console.log("grade 3")
    } else if(x >=70){
        console.log("grade 2")
    } else if(x >=60){
        console.log("grade 1")
    } else if(x <=59){
        console.log("grade 0")
    }
    rl.close()
});