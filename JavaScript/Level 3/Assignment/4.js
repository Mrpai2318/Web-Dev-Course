let str = prompt("Enter a string: ");
let n = parseInt(prompt("Enter a index of the string you want to check: "));
let char = str[n];

if (char == char.toLowerCase()) {
    console.log(`Character ${char} is lowercase`);
}
else if (char == char.toUpperCase()) {
    console.log(`Character ${char} is uppercase`);
}
else {
    console.log("Invalid input");
}