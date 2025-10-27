const buttons = document.querySelectorAll('.button')
// console.log(button)
const body = document.querySelector('body')

buttons.forEach(function(button) {
//    console.log(button)
       
  button.addEventListener('click', function(e) {
    // console.log(e.target.id)
    if(e.target.id === e.target.id) {
        document.body.style.backgroundColor = e.target.id
    }
  })

})
