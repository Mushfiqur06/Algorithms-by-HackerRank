function countingSort(arr) {
    const len = arr.length;
    const result = [];

    for (let i = 0; i < 100; i++) {
      result.push(0);
    }

    arr.forEach(num => {
      result[num]++;
    });

    return result;

}