// function sayMyname() {
//     console.log('vijay')
// }

// sayMyname// refernce 
// //() => excecte

// sayMyname()


// function add(num1, num2) {
//     const sum =  num1 + num2;
//     return sum 
// }

// const result = add(2,2)
//  console.log(result)


function loginUser(username = "sujal") {
   if(username === undefined) {
    console.log(`please enter user name`);
    return;
   }

   return `${username} just logged in`
}
 
let result =loginUser("vijay")
console.log(result);

