const myNmuber = 1000

if (myNmuber < 500) {
    console.log("my number is less than 500")
} else if (myNmuber < 750) {
    console.log("my number is less than 750")
} else if (myNmuber < 1200) {
    console.log("my number is less than 1200")
}




const userloggedIn = true
const userFromGoogle = false
const userFromGmail = true

if(userloggedIn && userFromGmail || userFromGoogle){
    console.log("Welcome")
}

// && = add
// || = or 
