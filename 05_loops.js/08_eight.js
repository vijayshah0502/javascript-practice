//acc and current value 

// const myarr = [1, 2,3] 


// // const myTotal = myarr.reduce(function( acc, currval) {
// //     console.log(acc, currval);
    
// //       return acc + currval
// // },0)


// const myTotal = myarr.reduce( (acc, currval) => acc + currval, 0 ) 


// console.log(myTotal);


const shopping = [ 
    {
        item : "tshirt",
        price : 500
    },

    {
        item: " pant",
        price: 1000
    },

    {
        item: "shoes",
        price : 500
    }
]

const total = shopping.reduce((acc, item) => acc + item.price, 0 )
console.log(total);
 