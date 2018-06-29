function quickSort(arr, low, high) {
	// Complete this function
	var len = arr.length;
	if (low < high) {
		pi = partition(arr, low, high);

		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}

	return arr;
}

function partition(arr, low, high) {
	var i = low - 1;
	var pivot = arr[high];
	var temp;
	for (var j = low; j < high; j++) {
		if (arr[j] < pivot) {
			i++;
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
	temp = arr[i + 1];
	arr[i + 1] = arr[high];
	arr[high] = temp;
	return i + 1;
}

//console.log(quickSort([5, 8, 1, 3, 7, 9, 2], 0, 6));