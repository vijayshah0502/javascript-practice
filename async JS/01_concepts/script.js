// setTimeout(function() {
//     console.log("vijay")
// }, 2000)

// setInterval(function() {
//     console.log("vijayshah")
// },2000)


// const sayvijay = function(){
//     console.log("vijayshah");
    
// }
// setInterval(sayvijay, 2000)


const changeText = function() {
    document.querySelector("h1").innerHTML = "best JS course"
}

const changeme = setTimeout(changeText, 3000)

// clearTimeout(changeme)

const stopButton = document.querySelector("#button")

stopButton.addEventListener('click', () => {
          clearTimeout(changeme)
          console.log("stopped")
})