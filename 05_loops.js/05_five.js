const myfamilys = ['raju','manisha', 'sujal', 'vijay']

// myfamilys.forEach( function name(myfamily){
//     console.log(myfamily);
    
// })

// myfamilys.forEach((myfamily) =>{
//     console.log(myfamily);
    
// })


function printme(family) {
    console.log(family )
}

myfamilys.forEach(printme)


const mycoding = [
    {
        lang: "java",
        filename: "java"
    },
    {
        lang: "pyhon",
        filename: "py"
    },
    {
        lang: "ruby",
        filename: "rb"
    }
]

mycoding.forEach(function(item) {
      console.log(item.filename);
      
})