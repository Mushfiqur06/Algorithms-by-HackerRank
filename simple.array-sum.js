function simpleArraySum(n, ar) {
    n = String(n);
    var ar = n.split(',');
    var arr = [];
    var sum = 0;

    for(var i=0; i<ar.length; i++){
        arr.push(parseInt(ar[i]));
    }

     for(var j=0; j<arr.length; j++){
        sum+=arr[j];
    }
    return sum;

}
