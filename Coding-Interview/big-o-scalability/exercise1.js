// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    // O(1) because only running once
    let a = 10;
    // O(1)
    a = 50 + 3;
  
    // O(n) - n meaning everything will run as many times as the input from above is
    for (let i = 0; i < input.length; i++) {
        // O(n)
        anotherFunction();
        // O(n)
        let stranger = true;
        // O(n)
      a++;
    }
    // O(1)
    return a;
}

// Add all together: 3 + n + n + n + n 
// BIG O(3 + 4n) or 0(n)

funChallenge()