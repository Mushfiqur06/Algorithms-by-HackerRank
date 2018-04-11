function plusMinus(arr) {
    /*
     * Write your code here.
     */
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number)
    var positiveNumbers = arr.filter((number) => { if (number > 0) return Number(number) });
    var negativeNumbers = arr.filter((number) => { if (number < 0) return Number(number) });
    var zeros = arr.length - positiveNumbers.length - negativeNumbers.length;
    
    console.log(positiveNumbers.length / arr.length);
    console.log(negativeNumbers.length / arr.length);
    console.log(zeros / arr.length);

}