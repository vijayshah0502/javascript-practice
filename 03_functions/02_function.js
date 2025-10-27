// function calculateCartprice( ...num1) {
//     return num1
// }

// console.log(calculateCartprice(200, 300, 400, 500)
// );


const user = {
    name: "vijay",
    price : 99
}
const user2 = {
    name: "sujal",
    price : 100
}


function handleObject(anyuser) {
    console.log(`username is ${anyuser.name} and price is ${anyuser.price}`)
}

handleObject(user)
handleObject(user2)


let arr = [1,2,3,4,5,6]

function returnSecondvalue(anyarr) {
    console.log(`second array is ${anyarr[2]}`)
}

returnSecondvalue(arr)


function returnSecondvalue(anyarr) {
  return`second array is ${anyarr[2]}`
}

console.log(returnSecondvalue(arr))