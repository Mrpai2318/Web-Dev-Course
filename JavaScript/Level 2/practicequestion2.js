let input = prompt('Enter the size of popcorn you want: ');
let size = input.toUpperCase();

if (size == 'S') {
    console.log(`Price of ${size} size popcorn is Rs. 50`);
}
else if (size == 'M') {
    console.log(`Price of ${size} size popcorn is Rs. 100`);
}
else if (size == 'L') {
    console.log(`Price of ${size} size popcorn is Rs. 200`);
}
else if (size == 'XL') {
    console.log(`Price of ${size} size popcorn is Rs. 250`);
}
else {
    console.log('Invalid size');
}