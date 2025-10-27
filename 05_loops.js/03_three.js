// const arr = [1,2,3,4,5]

// for (let num of arr) {
//     console.log(num);
    
// }

// const greetings = "helloworld"
// for(const greet of greetings) {
//     console.log(greet);
    
// }


const map = new Map() 
map.set('IN', "India")
map.set('USA',"united state of america")
map.set("fr", "france")

console.log(map)

for(let [key, value] of map) {
    console.log(key, value)
}