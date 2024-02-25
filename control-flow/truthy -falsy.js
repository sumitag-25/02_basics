// truthy means, assuming something will definetily true 
// falsy means, assuming something will definetily false 

// true

// const userEmail = "sumit@123"
// we assumed that if userEmail have any string than it will be true 
// if (userEmail) {
//     console.log("user logged in")
// } else{
//     console.log("user don't logged in")
// }


// False 

// const userEmail = ""

// if (userEmail) {
//     console.log("user logged in")
// } else{
//     console.log("user don't logged in")
// }


// True 

// const userEmail = []

// if (userEmail) {
//     console.log("user logged in")
// } else{
//     console.log("user don't logged in")
// }


// falsy values 
// false, 0, -0, BigInt 0n, "", null ,undefined ,NaN 

// truthy values 
// "0", "false", " ",[] ,{} , function(){}

const emptyArray = []

if (emptyArray.length == 0) {
    console.log("this is an empty array")
}

const emptyObject = {}

if (Object.keys(emptyObject).length == 0) {
    console.log("this is an empty object")
}


// Nullish Coalescing Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? (function test(num1) {
//     console.log(10)
// })();
val1 = null ?? 10 ?? 15


console.log(val1)

// Terniary Operator 

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")