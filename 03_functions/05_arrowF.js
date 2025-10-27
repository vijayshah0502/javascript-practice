const user = {
    name : "vijay",
    price : 100,

    welcomeMessage: function() {
        console.log(`${this.name}, welcome to webiste`);
        // console.log(this);
        
        
    }
 }
  
//  user.welcomeMessage()
// user.name = "sam"
//  user.welcomeMessage()

// console.log(this);




// function chai() {
//     let username = "sujal"
//     console.log(username)
// }

// chai()





// const coffe = () => {
//      let username = "sujal"
//      console.log(this)
// }

// coffe()


// const add = (num1, num2) => {
//     return num1 +num2
// }

// const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({username : "vijayshah"})


console.log(addTwo(3, 4))