

let stopIt;
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

start.addEventListener('click', function() {

  const saymyname = function(str) {
    console.log(str, Date.now())
  }

   stopIt = setInterval(saymyname, 1000, "hi vijay") 
   
  
})

stop.addEventListener('click', () => {
     clearInterval(stopIt)
})



