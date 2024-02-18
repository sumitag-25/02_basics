function one(){
    const username = "sumit"

    function two(){
        const company = "agamitechnologies"
        console.log(username)
    }
    // console.log(company)

    two()
}

// one()


if(true){
    const username = "sumitverma"

    if(username === "sumitverma"){
        const websites = "youtube"
        // console.log(username + websites)
    }
    // console.log(websites)
}
// console.log(username)




// ++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++

//Hoisting

// function decleration
myname()
function myname(){
    console.log("sumitverma")
}

//Expression (Holding functions in a varaibles)
mycompany()
const mycompany = function(){
    console.log("AgamiTechnologies")
}
