function closestNumbers(arr) {
    let minDiff = 10000000000;
    let results = [];
    arr = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i + 1] - arr[i] === minDiff) {
            results.push(arr[i], arr[i + 1]);
        }
        if (arr[i + 1] - arr[i] < minDiff) {
            results = []
            minDiff = arr[i + 1] - arr[i];
            results.push(arr[i], arr[i + 1]);
        }
    }

    return results.sort((a, b) => a - b);
}