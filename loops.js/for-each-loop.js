const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding .forEach( (val) => {
//     console.log(val);
// })

function printMe(item) {
    console.log(item);
}

//coding.forEach(printMe)  // just need to give reference not exectute thats why we didn't use ()


// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr)
// })

// sirf eak hi perimeter hi nhi hote function mai, uske sath index aur complete array bhi aata hai 


const myCoding = [
    {
        languageName: "javascript",
        langaugeFileName: "js"
    },
    {
        languageName: "java",
        langaugeFileName: "java"
    },
    {
        languageName: "python",
        langaugeFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
});