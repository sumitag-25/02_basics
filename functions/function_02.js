function calcuteCartPrice(...num){              
    return num
}        
            //    rest and spread operator for e-commerce websites

console.log(calcuteCartPrice(100, 200, 490, 4389))


// passing objects in functions

const user = {
    username: "hitesh",
    price: 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleobject(user)

// handleobject({
//     username: "sam",
//     price: 199
// })


// passing arrays in functions

const myNewArray = [200, 400, 600]

function handleArrays(arrays){
    console.log(`${arrays[1]} is the secound value of the array`)
}

// handleArrays(myNewArray);

handleArrays([329, 383, 332])