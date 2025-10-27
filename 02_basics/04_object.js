// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "1"
tinderUser.name = "sam"
tinderUser.logeedIn = false
console.log(tinderUser)

const regularUser = {
    email : "vijayshah@gmail.com",
    fullname : {
            username : {
                firstname : "vijay",
                lastname : "shah"
            }
    }
}
console.log(regularUser.fullname.username.firstname);


const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}
const obj3 = {5:"e", 6: "f"}

// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2}
console.log(obj4)



//
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
