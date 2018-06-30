function processData(input) {
    //Enter your code here
    var numCounts = []; // Will hold the number of counts.
    var sortedArray = []; // Will hold the sorted array
    input = input.split("\n"); // Split to get the inputs.

    let elements = input[1].split(" ").map(Number);

    elements.forEach(function(value) {
      // Using the array elements as keys and counts as values.
      numCounts[value] = numCounts[value] + 1 || 1;
    });

    // Loop through the array.
    for (var i = 0; i < numCounts.length; i++) {
      // Each index of numCounts has a value count.
      // This loop inserts into the sortedArray depending on the counts
      for (var j = 0; j < numCounts[i]; j++) {
        sortedArray.push(i);
      }
    }
    console.log(sortedArray.join(" "));
}