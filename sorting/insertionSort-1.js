function insertionSort1(n, arr) {
    const val = arr[n - 1];
    let i = n - 1;

    while (arr[i] >= val) {
        arr[i] = arr[--i];
        if (arr[i] >= val) console.log(arr.join(' '));
    }

    arr[i + 1] = val;
    console.log(arr.join(' '));
}