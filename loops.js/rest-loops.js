// for of 
// Array specific loop 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if (greet == " ") {
        // console.log("space is detected");
        continue
    }
    // console.log(`greet is ${greet}`)
}


// Maps  map is also a data type like objects but only unique values in it and order specific

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FN", "France")

// console.log(map)
// console.log(map.get('IN'))

for (const [key, value] of map) {
    // console.log(key, ":-", value)
}

const myObject = {
    'game1': 'pubg',
    'game2': 'coc'
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value)
}