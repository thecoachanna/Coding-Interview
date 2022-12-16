// Write a JavaScript function to check whether a string is blank or not.

function is_Blank(input) {
    if (input.length === 0)
        return true;
    else
        return false;
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));

// Write a JavaScript function to split a string and convert it into an array of words.

function string_to_array(str) {
    return str.trim().split(' ')
}

console.log(string_to_array("Robin Singh"));