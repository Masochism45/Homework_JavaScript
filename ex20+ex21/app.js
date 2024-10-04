const realuesr = "admin"
const realpass = "password123"
let username = prompt("Please enter your username: ")
let password = prompt("Please enter your password: ")
if(username === realuesr && password === realpass){
    console.log("Login successful!")
} else{
    console.log("Incorrect username or password. Please try again.")
}