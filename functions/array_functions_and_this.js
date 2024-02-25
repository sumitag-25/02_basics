const user = {
    username: "Sumit",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sumitverma"
// user.welcomeMessage()

// console.log(this)-

// ++++++++++++++++++++ this keyward use only in objects not in functions ++++++++++++++++++


// const chai = function(){
//     let username = "Sumit"
//     console.log(this.username)
// }

// chai()

// ++++++++++++ Arrow function ++++++++++++++

const chai = () => {
    let username = "Sumit"
    console.log(this.username)
}

chai()
// Explicet return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// must use return keyword in curly braces

// Implecet return 

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Sumit"}) //when use object in these types of functions

console.log(addTwo(3, 2))