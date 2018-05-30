function staircase(n) {
    /*
     * Write your code here.
     */
    var i = 1;

    while (i <= n) {

    console.log( " ".repeat( n-i ) + "#".repeat( i ) );

    i++;

    }

}