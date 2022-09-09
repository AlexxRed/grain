function loadGrain(levels) {
  let result = 0;
  let left = 0;
  let right = levels.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (levels[left] < levels[right]) {
      if (levels[left] >= leftMax) {
        leftMax = levels[left];
      } else {
        result += leftMax - levels[left];
      }
      left+=1;
    } else {
      if (levels[right] >= rightMax) {
        rightMax = levels[right];
      } else {
        result += rightMax - levels[right];
      }
      right-=1;
    }
  }

  return result;
};

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

checkingResult([15, 0, 6, 10,11, 2, 5], 20);
checkingResult([4, 2, 3, 1, 3, 3, 1, 5], 11);
checkingResult([4, 1, 3], 2);
checkingResult([2, 1, 5, 2, 7, 4, 10], 7);
checkingResult([2, 0, 1, 5, 2, 7], 6);
checkingResult([2, 4, 2], 0);
checkingResult([7, 4], 0);
checkingResult([], 0);
