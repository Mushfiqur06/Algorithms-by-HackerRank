function diagonalDifference(a) {
    /*
     * Write your code here.
     */
    var n = parseInt(readLine());
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += a[i][i] - a[i][n-1-i];
    }
    console.log(sum >= 0 ? sum : sum * -1);

}