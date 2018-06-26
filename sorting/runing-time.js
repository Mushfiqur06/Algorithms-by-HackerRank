var count = 0;

function runningTime(arr) {
    var n = arr.length;
    for(let i = 1; i < n; i++){
        var rest = arr.slice(i + 1, n);
        var result = insert(i + 1, arr.slice(0, i + 1));
        arr = result.concat(rest);
    }
    return count;
}

function insert(n, arr) {
    var e = arr[n - 1];
    if(e >= arr[n - 2]) return arr;
    for(let i = n - 1; i >= 0; i --){
        arr[i] = arr[i - 1];
        if(i !== n - 1) count ++;
        if(i === 0){
            arr[0] = e;
            return arr;
        }
        else if( arr[i + 1] >= e && e >= arr[i - 1] ){
            arr[i] = e;
            return arr;
        }
    }
}