
//* O(n) --> Linear Time - Time grows depending on how many inputs there are. Most common.

const nemo = ['nemo']
const large = new Array(1000).fill('nemo')

function findNemo(array) {
    // Test time it takes to run for loop
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!')
        }
    }
    // Second timer to compare beginning and end
    let t1 = performance.now();
    console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds.')
}

findNemo(large); 


//* O(1) --> Constant Time - Will always be the same time and same number of operations. No many how many elements it will run the same.

const boxes = [0, 1, 2, 3, 4, 5];
function logFirstTwoBoxes(boxes) {
    // O(1)
    console.log(boxes[0]); 
    // O(1)
    console.log(boxes[1]);
}
// O(2)
logFirstTwoBoxes(boxes)


//* O(n^2) --> Quadratic Time
// Log all pairs of array
const letters = ['a', 'b', 'c', 'd', 'e']

function logAllPairsofArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

logAllPairsofArray(letters)
