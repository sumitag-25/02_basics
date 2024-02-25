// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item)=>{
//     console.log(item);
//     return item
// })

// console.log(values)
// here foreach can not return and values for the solution of this we use filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]

// const newName = myNums.filter( (num) => num > 4 )
// const newName = myNums.filter( (num) => { 
//    return num > 4
//  })
// console.log(newName);

const newNums = []

myNums.forEach( (num) => {
    if ( num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums)





const books = [
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        genre: "Science Fiction",
        publishDate: "October 12, 1979",
        latestEdition: 6
    },
    {
        title: "The Chronicles of Narnia",
        genre: "Fantasy",
        publishDate: "1950-1956",
        latestEdition: 7
    },
    {
        title: "The Da Vinci Code",
        genre: "Mystery",
        publishDate: "March 18, 2003",
        latestEdition: 5
    },
    {
        title: "The Shining",
        genre: "Horror",
        publishDate: "January 28, 1977",
        latestEdition: 4
    },
    {
        title: "The Picture of Dorian Gray",
        genre: "Gothic Fiction",
        publishDate: "June 20, 1890",
        latestEdition: 3
    },
    {
        title: "The Hunger Games",
        genre: "Science Fiction",
        publishDate: "September 14, 2008",
        latestEdition: 8
    },
    {
        title: "Brave New World",
        genre: "Dystopian Fiction",
        publishDate: "1932",
        latestEdition: 6
    },
    {
        title: "The Road",
        genre: "Post-apocalyptic Fiction",
        publishDate: "September 26, 2006",
        latestEdition: 3
    },
    {
        title: "A Game of Thrones",
        genre: "Fantasy",
        publishDate: 1996,
        latestEdition: 15
    },
    {
        title: "Gone with the Wind",
        genre: "Historical Fiction",
        publishDate: 1993,
        latestEdition: 8
    }
];

const userNeeds = books.filter( (bk) => { 
    return bk.latestEdition > 5 && bk.genre === "Fantasy" || bk.title === "Gone with the Wind"
})

console.log(userNeeds);



