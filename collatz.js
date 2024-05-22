console.log(collatz(27, 0));

function collatz(number, add) {
	if (number <= 1)
		return (add);
	else if (number % 2 === 0)
		return (collatz(number/2, add + 1));
	return (collatz((number * 3) + 1, add + 1));
}

