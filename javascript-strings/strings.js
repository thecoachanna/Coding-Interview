// 2. Write a JavaScript function to check whether a string is blank or not.

function is_Blank(input) {
    if (input.length === 0)
        return true;
    else
        return false;
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));

// 3. Write a JavaScript function to split a string and convert it into an array of words.

function string_to_array(str) {
    return str.trim().split(' ')
}

console.log(string_to_array("Anna Nettles"));

// 4. Write a JavaScript function to extract a specified number of characters from a string.

function truncate_string(str, index) {
    return str.slice(0, index)
}

console.log(truncate_string("Anna Nettles", 7));

// 5. Write a JavaScript function to convert a string in abbreviated form.

function abbrev_name(str1) {
    const split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Anna Nettles"))

// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.

function protect_email(user_email) {
    const split = user_email.split('@');
    let part1 = split[0];
    const avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    const part2 = split[1];
    return part1 + "...@" + part2;
}

console.log(protect_email("nettles.anna@gmail.com"))