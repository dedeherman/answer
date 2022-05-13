// Expected result :  [7, 7, 7, 6, 92, 11]
// Direction : copy arr1 last three of element without removing default length and fill the rest value with 7

const arr1 = [12, 24, 51, 6, 92, 11];

function result(arr1) {
    // Your Code Here
    let arr2 = [];
    let arr2Length = arr1.length;
    for (let i = 0; i < arr2Length; i++) {
        if (i < arr2Length - 3) {
            arr2.push(arr1[i]);
        } else {
            arr2.push(7);
        }
    }
    return arr2;
}

console.log(result(arr1));