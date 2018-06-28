function quickSort(arr) {
    var sm = [];
    var lg = [];
    var target = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < target) sm.push(arr[i]);
        else if(arr[i] === target) lg.unshift(arr[i]);
        else if(arr[i] > target) lg.push(arr[i]);
    }
    return sm.concat(lg);
}