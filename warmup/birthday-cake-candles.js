function birthdayCakeCandles(n, ar) {
    var max = Math.max(...ar);    
    var result = ar.filter(c => c === max);    
    return result.length;
}