function loadGrain(levels) {
	let result = 0;
	let baseIndex = 0;
	let pitItems = [];

	for (let index = 0; index < levels.length; index++) {
		if (index === 0) continue;

		if (levels[index] >= levels[baseIndex]) {
			const valueToAdd = pitItems.reduce((prev, curr) => {
				return prev + curr;
			}, 0);
			result += valueToAdd;
			pitItems = [];
			baseIndex = index;
		} else if (levels[index] < levels[baseIndex]) {
			pitItems.push(levels[baseIndex] - levels[index]);
		}
	}

	if (pitItems.length > 0) {
		const highestItem = Math.min(...pitItems);
		const index = pitItems.indexOf(highestItem);
		pitItems = pitItems.slice(0, index);
		const valueToAdd = pitItems.reduce((prev, curr) => {
			return prev + (curr - highestItem);
		}, 0);
		result += valueToAdd;
	}
	
	return result;
}

function checkingResult(levels, expectedResult) {
	const actualResult = loadGrain(levels);
	const arrPres = JSON.stringify(levels);
	console.log('Testing:', arrPres);
	console.log('Expected: ', expectedResult, 'Actual: ', actualResult);
	if (actualResult !== expectedResult) {
		throw Error(`${actualResult} is not equal to ${expectedResult}`);
	}
	console.log('Success!');
}

checkingResult([4, 2, 3, 1, 3, 3, 1, 5], 11);
checkingResult([4, 1, 3], 2);
checkingResult([2, 1, 5, 2, 7, 4, 10], 7);
checkingResult([2, 0, 1, 5, 2, 7], 6);
checkingResult([2, 4, 2], 0);
checkingResult([7, 4], 0);
checkingResult([], 0);
