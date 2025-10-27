const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result  = document.querySelector('#results')
   
    if(height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid weight ${weight}`
    }
    
      const BMI = (weight / ((height / 100) ** 2)).toFixed(2);
      
    

  let category ;
  if (BMI < 18.6) {
    category = "Underweight 😕";
}
  else if (BMI > 18.6 && BMI < 24.9 ) {
    category = "Normal weight 🙂";
}
  else if (BMI > 24.9) {
    category = "Overweight 😐";
}
  
  
  result.textContent = `Your BMI is ${BMI} (${category})`;


})