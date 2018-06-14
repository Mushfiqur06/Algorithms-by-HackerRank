// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {
    for (var i = 1; i < arr.length; i++) {
      var j = i;
      var value = arr[i];
      while (j >= 1 && (arr[j-1] > value)) {
        arr[j] = arr[j-1];
        j--;
      }
      arr[j] = value;
      console.log(arr.join(' '));
    }
}