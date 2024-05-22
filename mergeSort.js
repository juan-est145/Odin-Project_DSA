function mergeSort(array) {
	if (array.length > 1) {
		let  mid = array.length / 2;
		mergeSort(array.slice(0, mid));
		mergeSort(array.slice(mid, array.length));
	}
	console.log(array);
}

mergeSort([105, 79, 100, 110]);

