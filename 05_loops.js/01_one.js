// for(i =0; i <=10; i++) {
//     console.log(i);
//     if(i === 5) {
//         console.log('5 is best number');
        
//     }
    
// }


// for(let i = 0; i <=10; i++) {
//     console.log(`outer loop is ${i}`)
//     for(let j=0; j <= 10; j++){
//         //  console.log(`inner loop is ${j}`);
//         console.log(i*j)
         
//     }
// }



// myarr = ['raju', 'manisha', 'sujal', 'vijay']

// for(let i=0; i<myarr.length; i++) {
//     console.log(myarr[i])
// }


//break and continue 

for(let i=1; i<=10; i++) {
    console.log(i);
    
    if(i === 5) {
        console.log(`5 is detected`);
        break
    }
}



for(let i=1; i<=10; i++) {
    console.log(i);
    
    if(i === 5) {
        console.log(`5 is detected`);
        continue
    }
}