function fibsIter(number) {
	if (number === 1)
		return ([0]);
	else if (number < 1)
		return ([]);
	const result = [0, 1];
	for (let i = 2; i < number; i++) {
		result.push(result[i - 1] + result[i - 2]);
	}
	return (result);
}

function fibsRec(number) {
	if (number <= 0)
		return ([]);
	else if (number === 1)
		return ([0]);
	else if (number === 2)
		return ([0, 1]);
	const result = fibsRec(number - 1);
	result.push(result[result.length - 1] + result[result.length - 2]);
	return (result);
}

let number = 8;

console.log(fibsIter(number));
console.log(fibsRec(number));