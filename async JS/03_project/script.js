//random color generate 

const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = "#"

    for(let i=0; i<6; i+=1){
        color = color + hex[Math.floor(Math.random() * 16)]
     
}
return color

}  

console.log(randomColor())

let stopIt;
const startChangingColor = function() {
    
    if(!stopIt) {
             stopIt = setInterval(changeBg, 100)
    }
    
     const changeBg = function() {
        document.body.style.backgroundColor = randomColor()
     }


}

const stopChangingColor = function() {
       clearInterval(stopIt)
       stopIt = null
}

document.querySelector("#start").addEventListener("click", startChangingColor)
document.querySelector("#stop").addEventListener("click", stopChangingColor)