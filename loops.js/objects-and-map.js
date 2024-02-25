const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple",
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const myArray = ['sumit', 'roshan', 'harshit', 'aditya']

for (const key in myArray) {
    console.log(myArray[key]);
}




const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FN", "France")

for (const key in map) {
    console.log(key);
}