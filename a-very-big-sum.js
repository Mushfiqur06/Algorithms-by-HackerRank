function aVeryBigSum(n, ar) {
    /*
     * Write your code here.
     */
    let getSum = (total, num) => (
        total + num
    );
    return ar.reduce(getSum);

}