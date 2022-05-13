// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
    // Your Code Here
    let median = 0;
    let medianArray = [];
    let medianArrayLength = input.length;
    if (medianArrayLength % 2 === 0) {
        median = (input[medianArrayLength / 2] + input[medianArrayLength / 2 - 1]) / 2;
    } else {
        median = input[Math.floor(medianArrayLength / 2)];
    }
    medianArray.push(median);
    return medianArray;
}

console.log(result(input));