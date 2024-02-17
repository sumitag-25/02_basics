function myName() {
    console.log("S")
    console.log("u")
    console.log("m")
    console.log("i")
    console.log("t")
}

// myName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// // addTwoNumbers(2, 4);

// const result = addTwoNumbers(2, 4)

// console.log("Result: ",result)



function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// addTwoNumbers(2, 4);

const result = addTwoNumbers(2, 4)

// console.log("Result: ",result)


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} is logged in`
// }

// // console.log(loginUserMessage("sumit"))
// console.log(loginUserMessage());


// other way of representation

function loginUserMessage(username = 'some one logged in'){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} is logged in`
}

// console.log(loginUserMessage("sumit"))
console.log(loginUserMessage())