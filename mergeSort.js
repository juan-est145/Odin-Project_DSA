function mergeSort(array) {
	if (array.length > 1) {
		let mid = Math.floor(array.length / 2);
		const array1 = mergeSort(array.slice(0, mid));
		const array2 = mergeSort(array.slice(mid, array.length));
		return (sort(array1, array2));
	}
	else
		return (array);
}

function sort(array1, array2) {
	const result = [];
	let array1Index = 0;
	let array2Index = 0;

	while (array1Index != array1.length || array2Index != array2.length) {
		if (array1Index === array1.length) {
			result.push(array2[array2Index]);
			array2Index++;
		}
		else if (array2Index === array2.length) {
			result.push(array1[array1Index]);
			array1Index++;
		}
		else if (array1[array1Index] < array2[array2Index]) {
			result.push(array1[array1Index]);
			array1Index++;
		}
		else {
			result.push(array2[array2Index]);
			array2Index++;
		}
	}
	return (result);
}

console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([9, 7, 5, 6, 2, 4]));
console.log(mergeSort([9, 7, 5, 6, 2]));

