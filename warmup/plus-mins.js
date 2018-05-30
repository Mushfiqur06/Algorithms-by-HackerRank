function plusMinus(arr) {
    // Complete this function
    let positives = parseFloat(arr.filter(value => value > 0).length / arr.length).toPrecision(6) 
    let negatives = parseFloat(arr.filter(value => value < 0).length / arr.length).toPrecision(6) 
    let zeroes = parseFloat(arr.filter(value => value === 0).length / arr.length).toPrecision(6) 
   
    console.log(positives) 
    console.log(negatives) 
    console.log(zeroes) 
    
    
}